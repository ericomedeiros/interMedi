// create our angular app and inject ui.bootstrap
angular.module('app', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate'])

.controller('mainController', function($scope, $http) {
  
  // BUTTONS ======================
  
  // define some random object and button values
  $scope.showAlert = function (text, tipo, tempo) {
    $scope.alerts.push({msg: text, type: tipo, time: tempo});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.selecionar = function (argument) {
    $scope.searchText = "";
    var temp = argument;
    $scope.remedios.splice($scope.remedios.indexOf(argument),1);
    $scope.selecionados.push(temp);
  };

  $scope.initInfo = function (data) {

    $scope.collapse             = false;
    $scope.alert                = [];
    $scope.remedios             = [];
    $scope.selecionados         = [];
    $scope.initRemedios         = [];
    $scope.resultadosReact      = [];
    $scope.resultTextType       = new Array();
    $scope.resultClassType      = new Array();
    $scope.resultClassType["c"] = "success";
    $scope.resultClassType["v"] = "warning";
    $scope.resultClassType["i"] = "danger";
    $scope.resultTextType["c"]  = "Compativel";
    $scope.resultTextType["v"]  = "Variavel";
    $scope.resultTextType["i"]  = "Incopativel";

    $http.get("./php/selectAll.php").then(function(responseData) {
      $scope.remedios = $scope.remedios.concat(responseData.data);
      $scope.initRemedios = $scope.initRemedios.concat(responseData.data);
    }, function(errorResponse) {
      console.log(errorResponse);
      $scope.showAlert(errorResponse, "danger", "none");
    });
  };

  $scope.procurar = function () {
    if ($scope.selecionados.length == 0){
      $scope.showAlert("Selecione pelos menos um remédio", "", "none");
      return;
    } 
    var table = [];
    for (var i = 0; $scope.selecionados.length > i; i++) {
      table.push($scope.selecionados[i].id_remedio);
    }
    $http.post("./php/selectReactions.php", table)
    .then(function(response) {
        //First function handles success
        $scope.resultadosReact = response.data;
        if($scope.resultadosReact.length > 0) {
          $scope.collapse = true;
        }else{
          $scope.showAlert("Não foi encontrado registro de interações com os remedios selecionados", "", "none");
        }
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
  };

  $scope.limparSelecao = function () {
    $scope.remedios = [];
    $scope.remedios = $scope.remedios.concat($scope.initRemedios);
    $scope.selecionados = [];
  };
});
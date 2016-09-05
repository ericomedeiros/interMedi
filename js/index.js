// create our angular app and inject ui.bootstrap
angular.module('app', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate'])

.controller('mainController', function($scope, $http) {
  
  // BUTTONS ======================
  
  // define some random object and button values
  $scope.showAlert = function (text, tipo) {
    $scope.alerts.push({msg: text, type: tipo});
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
    $scope.alerts               = new Array();
    $scope.remedios             = [];
    $scope.selecionados         = [];
    $scope.initRemedios         = [];
    $scope.resultadosReact      = [];
    $scope.resultTextType       = new Array();
    $scope.resultClassType      = new Array();
    $scope.resultClassType["c"] = "success";
    $scope.resultClassType["v"] = "warning";
    $scope.resultClassType["i"] = "danger";
    $scope.resultTextType["c"]  = "Compátivel";
    $scope.resultTextType["v"]  = "Variável";
    $scope.resultTextType["i"]  = "Incopatível";

    $http.get("./php/selectAll.php").then(function(responseData) {
      $scope.remedios = $scope.remedios.concat(responseData.data);
      $scope.initRemedios = $scope.initRemedios.concat(responseData.data);
    }, function(errorResponse) {
      console.log(errorResponse);
      $scope.showAlert(errorResponse, "danger");
    });
  };

  $scope.procurar = function () {
    if ($scope.selecionados.length == 0){
      $scope.showAlert("Selecione pelos menos um remédio", "");
      return;
    } 
    var table = [];
    for (var i = 0; $scope.selecionados.length > i; i++) {
      table.push($scope.selecionados[i].id_remedio);
    }
    $http.post("./php/selectReactions.php", table)
    .then(function(response) {
        $scope.resultadosReact = response.data;
        if($scope.resultadosReact.length > 0) {
          $scope.collapse = true;
        }else{
          $scope.showAlert("Não foi encontrado registro de interações com os remédios selecionados", "");
        }
    }, function(response) {
        $scope.showAlert(errorResponse, "danger");
    });
  };

  $scope.limparSelecao = function () {
    $scope.remedios = [];
    $scope.remedios = $scope.remedios.concat($scope.initRemedios);
    $scope.selecionados = [];
  };
});
// create our angular app and inject ui.bootstrap
angular.module('app', ['ui.bootstrap'])

.controller('mainController', function($scope, $http) {
  
  // BUTTONS ======================
  
  // define some random object and button values
  $scope.collapse = false;
  $scope.remedios = [];
  $scope.remediosRange = [
    "voriconazol",
    "vancomicina",
    "tramadol",
    "tiopental",
    "tigeciclina",
    "sulfato de magnésio",
    "sulfametoxazol-trimetoprima",
    "salbutamol",
    "ringer lactato",
    "ranitidina",
    "propofol",
    "prometazina",
    "polimixina B",
    "piperacilina-tazobactam",
    "penicilina G potassica",
      "pancurônio",
      "oxacilina",
      "ondansetrona",
      "omeprazol",
      "octreotide",
      "noradrenalina",
      "nitroprussiato de sodio",
      "nitroglicerina",
      "naloxona",
      "morfina",
      "midazolam",
      "micafungina",
      "metronidazol",
      "metoprolol",
      "metoclopramida",
      "metilprednisolona",
      "meropenem",
      "meperidina",
      "manitol",
      "linezolida",
      "lidocaina",
      "levofloxacino",
      "lanatosídeo",
      "insulina regular",
      "imipenem-cilastatina",
      "hioscina",
      "hidrocortisona",
      "heparina",
      "haloperidol",
      "gluconato de calcio",
      "gentamicina",
      "ganciclovir",
      "furosemida",
      "fosfato de potassio",
      "flumazenil",
      "fluconazol",
      "fitomenadiona",
      "filgrastima",
      "fentanil",
      "fenobarbital",
      "fenitoína",
      "esmolol",
      "ertapenem",
      "droperidol",
      "DOPamina",
      "DOBUTamina",
      "dimenidrato",
      "diazepam",
      "dexametasona",
      "clorpromazina",
      "cloreto de potassio",
      "cloreto de calcio",
      "clonidina",
      "clindamicina",
      "ciprofloxacino",
      "cetoprofeno",
      "cetamina",
      "cefUROxima",
      "cefTRIAXona",
      "cefTAZidima",
      "cefoxitina",
      "cefoTAxima",
      "ceFEPima",
      "ceFAZolina",
      "cefaLOTina",
      "bicarbonato de sodio",
      "azitromicina",
      "atropina",
      "atracúrio",
      "anfotericina B",
      "ampicilina-sulbactam",
      "ampicilina",
      "amoxicilina-clavulanato",
      "amiodarona",
      "aminofilina",
      "amicacina",
      "albumina",
      "adrenalina",
      "acido tranexamico",
      "aciclovir"
    ];
  $scope.selecionados = [];
  $scope.initRemedios = [];
  $scope.resultadosReact = [];

  $scope.selecionar = function (argument) {
    var temp = argument;
    $scope.remedios.splice($scope.remedios.indexOf(argument),1);
    $scope.selecionados.push(temp);
  };

  $scope.initInfo = function (data) {
    $http.get("./php/selectAll.php").then(function(responseData) {
      $scope.remedios = $scope.remedios.concat(responseData.data);
      $scope.initRemedios = $scope.initRemedios.concat(responseData.data);
    }, function(errorResponse) {
      console.log(errorResponse);
    });
  };

  $scope.procurar = function () {
    var table = [];
    for (var i = 0; $scope.selecionados.length > i; i++) {
      table.push($scope.selecionados[i].id_remedio);
    }
    $http.post("./php/selectReactions.php", table)
    .then(function(response) {
        //First function handles success
        $scope.resultadosReact = response.data;
        $scope.collapse = true;
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
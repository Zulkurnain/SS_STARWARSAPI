planetModule.controller('planetDetailController',planetDetailController);

planetDetailController.$inject = [
    '$scope',
    'planetService'
];

function planetDetailController(
	$scope,
    planetService
){
    var vm = $scope;
	
	planetService.getPlanetById(PlanetId).then(OnSuccessGetPlanet, OnFailGetList);
	
	function OnSuccessGetPlanet(result) {
        vm.SelectedPlanet = result;
    }
	
	 function OnFailGetList(errorMessage) {
        alert('Something Bad Happen')
    }
	
	
}

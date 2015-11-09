peopleModule.controller('peopleDetailController',peopleDetailController);

peopleDetailController.$inject = [
    '$scope',
    'peopleService'
];

function peopleDetailController(
	$scope,
    peopleService
){
    var vm = $scope;
	
	peopleService.getPeopleById(PeopleId).then(OnSuccessGetPeople, OnFailGetList);
	
	function OnSuccessGetPeople(result) {
        vm.SelectedPeople = result;
    }
	
	 function OnFailGetList(errorMessage) {
        alert('Something Bad Happen')
    }
	
	
}

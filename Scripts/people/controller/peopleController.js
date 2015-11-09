peopleModule.controller('peopleController',peopleController);

var PeopleId;

peopleController.$inject = [
    '$scope',
	'$filter',
    'peopleService',   
    'ngTableParams',
	'modalService'
];

function peopleController(
	$scope,
	$filter,
    peopleService,   
    ngTableParams,
	modalService
)
{
	var vm = $scope;
	vm.people = [];
	
	vm.tableParams = new ngTableParams({
	
        page: 1,
        // show first page
        count: 50,
        // count per page
        filter: {
           
        },
        sorting: {
            
        }
    }, {
        total: 0,
        // length of data
        getData: function ($defer, params) {                  
                peopleService.getAll().then(function (result) {
                    var processedData = params.sorting() ? $filter('orderBy')(result, params.orderBy()) : result;
                    processedData = params.filter() ? $filter('filter')(processedData, params.filter()) : processedData;

                    params.total(processedData.length);
                    $defer.resolve(processedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                });          
        }
    });
	
	vm.OpenPeopleDetail = function (peopleId) {
        var modalInstance = modalService.openDetailPeopleModal(peopleId);
		PeopleId = peopleId;
        modalInstance.result.then(onModalInstance, onModalInstance);
        function onModalInstance() {
            vm.tableParams.reload();
        }
    }
}
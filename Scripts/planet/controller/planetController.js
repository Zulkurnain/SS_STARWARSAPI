planetModule.controller('planetController',planetController);

var PlanetId;

planetController.$inject = [
    '$scope',
	'$filter',
    'planetService',   
    'ngTableParams',
	'modalService'
];

function planetController(
	$scope,
	$filter,
    planetService,   
    ngTableParams,
	modalService
)
{
	var vm = $scope;
	vm.planet = [];
	
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
                planetService.getAll().then(function (result) {
                    var processedData = params.sorting() ? $filter('orderBy')(result, params.orderBy()) : result;
                    processedData = params.filter() ? $filter('filter')(processedData, params.filter()) : processedData;

                    params.total(processedData.length);
                    $defer.resolve(processedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                });          
        }
    });
	
	vm.OpenPlanetDetail = function (planetId) {
        var modalInstance = modalService.openDetailPlanetModal(planetId);
		PlanetId = planetId;
        modalInstance.result.then(onModalInstance, onModalInstance);
        function onModalInstance() {
            vm.tableParams.reload();
        }
    }
}
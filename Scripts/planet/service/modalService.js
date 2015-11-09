planetModule.factory('modalService', ['$modal', function ($modal) {
    var modalService = {
        openDetailPlanetModal: openDetailPlanetModal
    };
	
	return modalService;
	
	function openModal(templateUrl, controllerName, size, resolveObject) 
	{
        var modalInstance = $modal.open({
            templateUrl: templateUrl,
            controller: controllerName,
            size: size,
            resolve: resolveObject
        });
        return modalInstance;
    }
	
	function openDetailPlanetModal(planetId)
	{
		var modalInstance = openModal('PlanetDetail.html','planetController','lg',{
			selectedPlanetId: function(){
					return planetId;
			}
		});
		return modalInstance;
	}
}]);
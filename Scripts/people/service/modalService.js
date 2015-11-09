peopleModule.factory('modalService', ['$modal', function ($modal) {
    var modalService = {
        openDetailPeopleModal: openDetailPeopleModal
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
	
	function openDetailPeopleModal(peopleId)
	{
		var modalInstance = openModal('PeopleDetail.html','peopleController','lg',{
			selectedPeopleId: function(){
					return peopleId;
			}
		});
		return modalInstance;
	}
}]);
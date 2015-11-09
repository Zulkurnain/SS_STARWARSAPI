peopleModule.service('peopleService',peopleService);
peopleService.$inject = ['$http','$q'];
	
function peopleService($http,$q){
	var peopleService = {
		getAll: function()
		{
			 var deferred = $q.defer();
			 
			   $http({
                url: 'http://swapi.co/api/people',
                method: 'GET'
            })
            .success(onSuccess)
            .error(onFail);

            return deferred.promise;

            function onSuccess(response) {
                var peoples = response.results;
                deferred.resolve(peoples);
            }

            function onFail() {
                deferred.reject({ type: 'error', msg: 'Can not retrieve people list' });
            }
		},
		
		 getPeopleById: function(peopleId)
		 {
            var deferred = $q.defer();

            $http({
                url: 'http://swapi.co/api/people/' + peopleId,
                method: 'GET'
            })
            .success(onSuccess)
            .error(onFail);

            return deferred.promise;

            function onSuccess(response) {
                var peoples = response;
                deferred.resolve(peoples);
            }

            function onFail() {
                deferred.reject({ type: 'error', msg: 'Can not retrieve people data' });
            }
        }
	}
	
	return peopleService;
}
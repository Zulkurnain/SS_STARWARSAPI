planetModule.service('planetService',planetService);
planetService.$inject = ['$http','$q'];
	
function planetService($http,$q){
	var planetService = {
		getAll: function()
		{
			 var deferred = $q.defer();
			 
			   $http({
                url: 'http://swapi.co/api/planets',
                method: 'GET'
            })
            .success(onSuccess)
            .error(onFail);

            return deferred.promise;

            function onSuccess(response) {
                var planets = response.results;
                deferred.resolve(planets);
            }

            function onFail() {
                deferred.reject({ type: 'error', msg: 'Can not retrieve planet list' });
            }
		},
		
		 getPlanetById: function(planetId)
		 {
            var deferred = $q.defer();

            $http({
                url: 'http://swapi.co/api/planets/' + planetId,
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
                deferred.reject({ type: 'error', msg: 'Can not retrieve planet data' });
            }
        }
	}
	
	return planetService;
}
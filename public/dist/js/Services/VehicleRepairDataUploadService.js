angular.module('Cartisan')
.service('VehicleRepairDataUploadService', function($q,$http)
{
       this.upload=function(payload)
  {  
     console.log(payload);
     
     var deferred=$q.defer();
                 $http({
                method: "POST",
                url: "http://localhost:8080/cartisan/main/vehicle/repair",
                data:payload,
                headers:{"content-type":"application/json"}
      
        }
            ).then(function success(response) {

              
              deferred.resolve(response);

            },
            function error(error){
              
              deferred.reject(error);

            });
            return deferred.promise;
  }

}
)




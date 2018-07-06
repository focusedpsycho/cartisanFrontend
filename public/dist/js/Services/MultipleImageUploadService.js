angular.module('Cartisan')
.service('MultipleImageUploadService', function($q,$http)
{
       this.imageUpload=function(images)
  {  
      var promises=[];
      var servingLocations=[];

     var deferred = $q.defer();
     var uploadUrl = 'http://localhost:8080/cartisan/main/image';

     var transformRequest = {};
     transformRequest['transformRequest'] = angular.identity;
     transformRequest['headers'] ={};
     transformRequest['headers']['Content-Type'] = undefined;


       angular.forEach(images , function(image) {

           var fs= new FormData();
       fs.append('image',image);

        var promise = $http.post(uploadUrl, fs, transformRequest);

        promises.push(promise);

    });

       $q.all(promises).then(function success(response)
       {

           for(var i=0;i<response.length;i++)
           {
             if(response[i].data.servingLocation!==undefined)
                servingLocations.push(response[i].data.servingLocation)
            else
                servingLocations.push(undefined);
           }

           deferred.resolve(servingLocations);
       }, function error(error)
       { 
          deferred.resolve(error);

       })

            
      return deferred.promise;  

}


});
angular.module('Cartisan')
.controller('BodyController',
  function(MultipleImageUploadService,$scope,$window,VehicleRepairDataUploadService)
{

    var BodyCtrl=this;

BodyCtrl.showMessage= false;

BodyCtrl.imageFiles =[];

BodyCtrl.imageFileNames = [];

BodyCtrl.filesUploaded=false;

BodyCtrl.imageUpload = function(event){
         files = event.target.files;
         BodyCtrl.imageFileNames=[];
         BodyCtrl.imageFiles=[]

         for (var i = 0; i < files.length; i++) {
            BodyCtrl.imageFiles.push(files[i]);
            BodyCtrl.imageFileNames.push(files[i].name);
                                    
         }

         BodyCtrl.filesUploaded= true;

         if(BodyCtrl.filesUploaded)
            $scope.$digest();
 
    }

BodyCtrl.HideandClear = function()
{
  BodyCtrl.showMessage= false;

BodyCtrl.imageFiles =[];

BodyCtrl.imageFileNames = [];

BodyCtrl.filesUploaded=false;

BodyCtrl.name="";
BodyCtrl.name="";
BodyCtrl.phone="";
BodyCtrl.email="";
BodyCtrl.description="";
BodyCtrl.vehicleModel="";


}

BodyCtrl.submit= function()
{
   var payload={}
   payload.name = BodyCtrl.name;
   payload.phoneNo = BodyCtrl.phone;
   payload.emailId = BodyCtrl.email;
   payload.description = BodyCtrl.description;
   payload.vehicleModel = BodyCtrl.vehicleModel;
   
   if(BodyCtrl.filesUploaded)
      {MultipleImageUploadService.imageUpload(BodyCtrl.imageFiles).then(function success(response){
      console.log(response);
       payload.vehiclePictures = response;
       console.log(payload);

       VehicleRepairDataUploadService.upload(payload).then(function success(response){
         BodyCtrl.showMessage= true;
         console.log(response);
       }, function error(error)
       {
        $window.alert("error in data upload");
       })
      },
      function error(error)
      {
       $window.alert('there was an error in image upload');
      }

 

)}

    else{

        VehicleRepairDataUploadService.upload(payload).then(function success(response){
         BodyCtrl.showMessage= true;
       }, function error(error)
       {
        $window.alert("error in data upload");
       })
    }

  }

})
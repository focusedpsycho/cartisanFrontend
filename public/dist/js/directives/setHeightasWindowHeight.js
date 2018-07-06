angular.module('Cartisan').directive('windowHeight', function($window){
  return{
    link: function(scope, element, attrs){
    	console.log("came here");
        element.css('height', ($window.innerHeight) + 'px');
        //element.height($window.innerHeight/2);
    }
  }
})

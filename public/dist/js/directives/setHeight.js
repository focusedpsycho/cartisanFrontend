angular.module('Cartisan').directive('setHeight', function($window){
  return{
    link: function(scope, element, attrs){
        element.css('height', ($window.innerHeight/2) + 'px');
        //element.height($window.innerHeight/2);
    }
  }
})

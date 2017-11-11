'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      //Function to animated slider for page landing
      function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
          var $this = $(this),
          $animationType = $this.data('animation');
          $this.addClass($animationType).one(animEndEv, function() {
            $this.removeClass($animationType);
          });
        });
      }
    //Variable on page load
    var $myCarousel = $('#productosCarousel'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find(
      "[data-animation  ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions
    doAnimations($firstAnimatingElems);
    $myCarousel.on('slide.bs.carousel',function(e) {
      var $animatingElems = $(e.relatedTarget).find(
      "[data-animation  ^= 'animated']");
      doAnimations($animatingElems);
    });
    }
  }

  angular.module('bootstrapApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();

'use strict';

(function() {

  class FooterController {
    constructor() {
    }
  }
  angular.module('bootstrapApp')
    .component('footeApp', {
      templateUrl: 'components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm'
    });
})();

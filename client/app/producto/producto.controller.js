'use strict';
(function(){

class ProductoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bootstrapApp')
  .component('producto', {
    templateUrl: 'app/producto/producto.html',
    controller: ProductoComponent
  });

})();

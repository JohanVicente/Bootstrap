'use strict';
(function(){

class CatalogoComponent {
  constructor() {
    this.icon = true;
  }
  $onInit(){
    if(!localStorage.respuestaModal)
    $('#modalOferta').modal();
  }
  noMostrarModal(){
    localStorage.respuestaModal = true;
  }
  showIcon(){
    if(this.icon){
      this.icon = false;
    }else{
        this.icon = true;
    }
  }
}

angular.module('bootstrapApp')
  .component('catalogo', {
    templateUrl: 'app/catalogo/catalogo.html',
    controller: CatalogoComponent,
    controllerAs: 'vm'
  });

})();

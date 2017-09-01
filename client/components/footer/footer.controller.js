'use strict';

(function() {

  class FooterController {
    constructor() {
    }
    formsubmit(){
      /*if(Math.random() > 0.5){
        console.log('True');
      }else{
        console.log('False');
      }*/
      this.el;
      this.error = Math.random() > 0.5;
      if(this.error){
        this.validaColor = "has-success";
        this.validaColorErr = ["form-control-feedback","glyphicon","glyphicon-ok"];
        this.el = "<label class='control-label' for='inputSuccess2'> Registro exitoso</label>";
      }else {
        this.validaColor = "has-error";
        this.validaColorErr = ["form-control-feedback","glyphicon","glyphicon-remove"];
        this.el = "<label class='control-label' for='inputSuccess2'> Registro erroneo</label>";
      }
    }
  }
  angular.module('bootstrapApp')
    .component('footerApp', {
      templateUrl: 'components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm'
    });
})();

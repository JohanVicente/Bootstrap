'use strict';

describe('Component: CatalogoComponent', function () {

  // load the controller's module
  beforeEach(module('bootstrapApp'));

  var CatalogoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CatalogoComponent = $componentController('CatalogoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: ProductoComponent', function () {

  // load the controller's module
  beforeEach(module('bootstrapApp'));

  var ProductoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProductoComponent = $componentController('ProductoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

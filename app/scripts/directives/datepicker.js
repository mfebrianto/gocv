angular.module('gocvApp')
  .directive('datepicker', function() {
  return function(scope, element, attrs) {
    element.fdatepicker({format: 'dd/mm/yy'});
  }
});

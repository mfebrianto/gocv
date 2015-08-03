'use strict';

var common = common || {};


common.datepicker = new(function(){
  this.init = function() {
    console.log('test');
    $('.date_picker1').fdatepicker();
    console.log('test2');
  };
})();

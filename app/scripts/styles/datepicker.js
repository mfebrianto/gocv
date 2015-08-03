'use strict';

var common = common || {};


common.datepicker = new(function(){
  this.init = function() {
    console.log(">>>>>>>datepicker start");
    $('.date_picker1').fdatepicker();
    console.log(">>>>>>>datepicker end");
  };
})();

var App = App || {};

App.Modal = (function(){
  var modalTrigger = $(".modal-trigger");
  var modal = $(".modal");
  var modalBackground = $("#modal-background");

  var setupTrigger = function(){
    modalTrigger.on("click", function(event){
      event.preventDefault();
      activateModalContent();
    });
  };

  var activateModalContent = function(){
    modal.addClass("active");
    modalBackground.addClass("active");
  };

  var initialize = function(){
    setupTrigger();
  };

  return {
    initialize: initialize
  };
})();

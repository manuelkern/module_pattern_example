var App = App || {};

App.Modal = (function(){
  var modalTrigger = $(".modal-trigger");
  var modal = $(".modal");
  var modalBackground = $("#modal-background");

  var setupTrigger = function(){
    modalTrigger.on("click", function(event){
      event.preventDefault();
      activateModalContent();
      bindBackgroundClose();
    });
  };

  var activateModalContent = function(){
    modal.addClass("active");
    modalBackground.addClass("active");
  };

  var bindBackgroundClose = function(){
    modalBackground.on("click", function(e){
      deactivateModalContent();
    });
  };

  var removeBackgroundHandler = function(){
    modalBackground.off("click");
  };

  var deactivateModalContent = function(){
    modal.removeClass("active");
    modalBackground.removeClass("active");
    removeBackgroundHandler();
  };

  var initialize = function(){
    setupTrigger();
  };

  return {
    initialize: initialize
  };
})();

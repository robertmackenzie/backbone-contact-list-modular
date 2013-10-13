var APP = APP || {};

(function(){

  Main = {};

  Main.View = Backbone.View.extend({
    el: 'body'
  });

  // export module
  APP.Main = Main;

})();
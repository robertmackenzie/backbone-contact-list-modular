var APP = APP || {};

(function(BB){

  Main = {};

  Main.View = BB.View.extend({

    el: 'body',

    initialize: function() {
      this.contacts = new APP.Contact.Collection([
                        {
                          name: 'Sam',
                          age: 23,
                          occupation: 'Hairdresser'
                        },
                        {
                          name: 'Sam',
                          age: 23,
                          occupation: 'Hairdresser'
                        }, 
                        {
                          name: 'Sam',
                          age: 23,
                          occupation: 'Hairdresser'
                        } 
                      ]);
      this.contactsView = new APP.Contact.CollectionView({ collection: this.contacts });
      this.render();
    },

    render: function(){
      this.$el.html(this.contactsView.el);
      return this;
    }

  });

  // export module
  APP.Main = Main.View;

})(Backbone);
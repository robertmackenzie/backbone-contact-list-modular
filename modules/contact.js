var APP = APP || {};

(function(BB){

  Contact = {};

  Contact.Model = BB.Model.extend({});

  Contact.Collection = BB.Collection.extend({
    model: Contact.Model
  });

  Contact.View = BB.View.extend({
    tagName: 'li',
    template: _.template('Name: <%= name %>'),
    render: function(){
      this.$el.html( this.template(this.model.toJSON()) );
      return this;
    }
  });

  Contact.CollectionView = BB.View.extend({
    tagName: 'ul',
    initialize: function(){
      this.render(); 
    },     
    render: function(){
      this.collection.each(function(contact){
        this.$el.append( new Contact.View({ model: contact }).render().el );
      }, this);
      return this;
    }
  });

  // export module
  APP.Contact = Contact;

})(Backbone);
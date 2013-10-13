var APP = APP || {};

(function(){

  Contact = {};

  Contact.Model = Backbone.Model.extend({});

  Contact.Collection = Backbone.Collection.extend({
    model: Contact.Model
  });

  Contact.View = Backbone.View.extend({});

  Contact.CollectionView = Backbone.View.extend({});

  // export module
  APP.Contact = Contact;

})();
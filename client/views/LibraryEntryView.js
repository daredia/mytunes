// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    },
  },

  initialize: function() {
    this.model.on('change:playCount', function() {
      this.render();
    }, this);
  },

  render: function() {
    // return this.$el.html(this.template(this.model));
    var playCount = this.model.get('playCount') || 0;
    return this.$el.html(this.template( _.extend( this.model.attributes, {'playCount': playCount } ) ) );
  }

});

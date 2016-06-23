// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('remove', function() { 
      this.render();
    }, this);
  },

  render: function() {
    var singleSongView = new SongQueueEntryView();
    singleSongView.render();
  }



});

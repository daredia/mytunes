// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(model) {
      var firstSong = this.at(0);
      this.remove(model);
      if (model.cid === firstSong.cid) {
        if (this.length > 0) {
          this.playFirst();  
        } else {
          // set the current song to nothing
          // current song is a property of the app model
          // can trigger an event to stop player view
          // ended also needs to do this
          this.trigger('empty', this);
        }
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});


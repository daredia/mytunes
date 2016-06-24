// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(model) {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      } else {
        this.stopTrack(model);
      }
    }, this);

    this.on('dequeue', function(model) {
      var firstSong = this.at(0);
      this.remove(model);
      if (model.cid === firstSong.cid) {
        if (this.length > 0) {
          this.playFirst();  
        } else {
          this.stopTrack(model);
        }
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  stopTrack: function(song) {
    song.stop();
  }

});


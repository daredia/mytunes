// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    if (this.length === 0) {
      var songsCollection = this;
      //Make Ajax Request
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'https://api.parse.com/1/classes/songs/',
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
          songsCollection.add(data.results);
          console.log('myTunes: Songs Retrieved');
          var app = new AppModel({library: songsCollection});

          // build a view for the top level of the whole app
          var appView = new AppView({model: app});

          // put the view onto the screen
          $('body').append(appView.render());
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error(data);
        }
      });
    }
  }

});


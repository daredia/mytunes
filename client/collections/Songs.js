var songData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
    title: 'Age Ain\'t Nothing But A Number',
    artist: 'Aaliyah',
  }
];


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
          // songsCollection.add(data.results);
          songsCollection.add(songData);
          console.log('myTunes: Songs Retrieved');
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error(data);
        }
      });
    }
  }

});


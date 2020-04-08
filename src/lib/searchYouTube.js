import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {
  // TODO
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: YOUTUBE_API_KEY,
          q: options,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          videoEmbeddable: true,
      },
      success: callback(data),
      error: function(response){
          console.log("Request Failed");
          console.log(response);
      }
    });
};

export default searchYouTube;

// Create a reusable API helper
// To search for YouTube videos, you'll use the API's Search:list  endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint. In lib/searchYouTube.js fill out the searchYouTube function. It should:

//  Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
//  Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
//  Accept an options object with the following properties:
//  query - the string to search for
//  max - the maximum number of videos to get, which should default to 5
//  key - an authorized YouTube Browser API key
//  Only GET embeddable videos
//  Make sure all the tests for searchYouTube are passing. You can open the tests with npm test

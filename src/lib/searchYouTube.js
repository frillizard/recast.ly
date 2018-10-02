import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: YOUTUBE_API_KEY,
    },
    type: 'GET',
    success: function(data) {
      callback(data);
    },
  });
};

export default searchYouTube;

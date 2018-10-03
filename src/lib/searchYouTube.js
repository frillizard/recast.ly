import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({query, max = 5}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: query,
      maxResults: max,
      type: 'video',
      key: YOUTUBE_API_KEY,
    },
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
  });
};

export default searchYouTube;

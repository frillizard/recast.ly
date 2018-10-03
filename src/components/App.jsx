import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
      // videos: [],
      // currentVideo: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.setVideos = this.setVideos.bind(this);
  }

  handleClick (key) {
    this.setState({currentVideo: key});
  }

  setVideos(query) {
    searchYouTube({query}, (videoList) => {
      this.setState({
        videos: videoList,
        currentVideo: videoList[0]
      });
    });
  }

  componentDidMount () {
    this.setVideos('cats');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search 
              handleChange={this.setVideos}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer 
              video={this.state.currentVideo}
            />
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videos}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

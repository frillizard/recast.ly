import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

var VideoList = () => (
  <div className="video-list">
    <VideoListEntry videoData={exampleVideoData[0]}/>
    <VideoListEntry videoData={exampleVideoData[1]}/>
    <VideoListEntry videoData={exampleVideoData[2]}/>
    <VideoListEntry videoData={exampleVideoData[3]}/>
    <VideoListEntry videoData={exampleVideoData[4]}/>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

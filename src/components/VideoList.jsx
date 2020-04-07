import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(item => <VideoListEntry video={item} />)}
  </div>
);


//<div><h5><em></em> view goes here</h5></div>
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//ReactDOM.render(<VideoList videoList={exampleVideoData} />, document.getElementById('app')); // do this in the index.js file itself

//include the Video List Entry component in each line of the video list
//in each entry, include title, description, and thumbnail image



// var GroceryListWithClass = (props) => (
//   <ul>
//     {props.groceryItems.map(item =>
//       <GroceryListItemClass groceryItem={item} /> //new GroceryListItemClass ({myGroceryItems: myGroceryItems (array)})
//     )}
//   </ul>
// );
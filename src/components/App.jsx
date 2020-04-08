import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js'
import YOUTUBE_API_KEY from '../config/youtube.js'


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//         <VideoPlayer />
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData : this.props.videoData,
      currentVideo: {
        id: {
          videoId: 'dQw4w9WgXcQ?autoplay=1'
        },
        snippet: {
          title: 'Rick Astley - Never Gonna Give You Up (Video)',
          description: 'Rick Astley doing what he does best',
        }
      },
      youTubeOptions : {
        key : YOUTUBE_API_KEY,
        query : '',
        max : 5
      }
    }

  }


   onSearchClick() {
     const searchString = document.getElementsByClassName('form-control')[0].value;
     this.state.youTubeOptions.query = searchString;
     searchYouTube(this.state.youTubeOptions, this.renderNewData.bind(this));
   }


  renderNewData(newVideoData) {
    this.setState(
      {currentData : newVideoData.items}
    )
  }


  onClick(selectedVideo) {
    console.log('Clicked!');
    this.setState({
      currentVideo : selectedVideo
      //videoDescription: selectedVideo.snippet.description,
      //videoURL: 'https://www.youtube.com/embed/' + selectedVideo.id.videoId
    })

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search doSearch={this.onSearchClick.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.currentData} clickFunction = {this.onClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    )
  }
}

//searchYouTube('cats', (data) => {console.log(data)});
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoList from './VideoList.js';


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
    super(props)
    this.state = {
      currentVideo: {
        id: {
          videoId: 'dQw4w9WgXcQ?autoplay=1'
        },
        snippet: {
          title: 'Rick Astley - Never Gonna Give You Up (Video)',
          description: 'Rick Astley doing what he does best',
        }
      }
    }

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
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.props.videoData} clickFunction = {this.onClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

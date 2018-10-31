import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

// YouTube API key (allows you to embed youtube in your app)
const API_KEY = 'AIzaSyD5gCn_C_F6zPGjQylMUYIVvilXXbmeHa8';

// When the App first boots up and we get an instance of App on the screen,
// the constructor will run immediately (because a new instance of App has
// been created)...and that will immediately kick off a search with the term
// 'surfboards'.
class App extends Component {
  // constructor method
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // App boots up. Videos is an empty array and selectedVideo is null.
    // We go into VideoDetail (in the render method). VideoDetail isn't provided
    // a video so it's going to show the 'Loading...' message. At the same time
    // we kick off a request to get a bunch of videos (i.e. YTSearch()). When
    // that search completes, the returned video objects are passed to
    // this.state.videos empty array, and the first video object is assigned to
    // this.state.selectedVideo.
    // Because we're setting state, the component is caused to rerender, which means
    // VideoDetail will be rerendered with video={this.state.selectedVideo}, and
    // the selectedVideo property now holds the first video object in the array.
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  // videos={this.state.videos} is an example of 'passing props' in React.
  // We're passing prop 'videos' to VideoList.
  // This passes the array of video objects from App's state to the VideoList
  // component.
  // Whenever App rerenders and the state is reset (e.g. due to a new user search),
  // VideoList will get the updated videos value (array of objects) from App's
  // state object.
  // videos here is passed to VideoList as an object called 'props' (see notes on
  // VideoList).
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // Passing a function called onVideoSelect that takes a selectedVideo
          // and assigns it as the value on this.state's selectedVideo property.
          // IOWs, it updates Apps state with the currently selected video.
          // Program flow: pass onVideoSelect as a prop to VideoList...
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM).
// <app /> is an instance of the class App (called a component). To be an
// instance it needs to be wrapped in JSX tags like this < />.
ReactDOM.render(<App />, document.querySelector('.container'));

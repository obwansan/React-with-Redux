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

    // When the App first loads, do an initial (default) search for 'surfboards'.
    this.videoSearch('surfboards');
  }
  // The ES6 class syntax requires method declarations in a short form (i.e. no 'function' keyword).
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // onSearchTermChange is a prop passed to <SearchBar />. A prop seems to be a
  // kind of variable that can hold a value or a callback function.
  //
  // When a user enters a search term, <SearchBar/> calls onSearchTermChange,
  // passing it the entered search term. onSearchTermChange passes the search
  // term into this.videoSearch(), videoSearch() does the YouTube search, which
  // gets the video objects, stores them in state as an array, and sets the
  // selectedVideo...which can then be used by VideList and VideoDetail.
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
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

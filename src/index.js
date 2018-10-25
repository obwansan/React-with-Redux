import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

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

    this.state = { videos: [] };

    // Does a youtube search for 'surfboards'. The YTSearch method returns an
    // array of objects (one per video) which it passes to the videos parameter.
    // The parameter could be called anthing. 'videos' is most descriptive.
    // We can then use this.setState in the callback function to assign the array
    // as the value of the videos property on the state object.
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({ videos: videos});
      // In ES6, when both key and value are the same string, can condense it like this.
      this.setState({ videos });

    });
  }
  // render method
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM).
// <app /> is an instance of the class App (called a component). To be an
// instance it needs to be wrapped in JSX tags like this < />.
ReactDOM.render(<App />, document.querySelector('.container'));

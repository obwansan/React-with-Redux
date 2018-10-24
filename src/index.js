// YouTube API key (allows you to embed youtube in your app)
const API_KEY = 'AIzaSyD5gCn_C_F6zPGjQylMUYIVvilXXbmeHa8';

// Get the React object from the 'react' library
import React from 'react';
// Get the ReactDOM object from the 'react-dom' library
import ReactDOM from 'react-dom';

// Get the SearchBar function (component) from the search_bar.js file
// Have to have 'export default SearchBar;' in search_bar.js for this to work.
// ./ is the current working directory
import SearchBar from './components/search_bar';

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM).
// <app /> is an instance of the class App (called a component). To be an
// instance it needs to be wrapped in JSX tags.
ReactDOM.render(<App />, document.querySelector('.container'));

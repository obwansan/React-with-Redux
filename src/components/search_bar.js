// Import React and pull off its Component property as a variable.
// Same as doing: const Component = React.Component;
import React, {Component} from 'react';

// class SearchBar extends React.Component
class SearchBar extends Component
{
  constructor(props) {
    // The super function(?) allows you to access methods in the class's
    // parent class, i.e. Component. 'super' means 'above'!
    super(props);

    // The class's state is a JS object containing properties. When the user
    // enters some text it will be stored as the value of the term property
    this.state = { term: '' };
  }
  // App's render method renders <SearchBar />. Class SearchBar in turn renders
  // the constituents of SearchBar (div and input elements). The input element
  // has the prop onChange which calls onInputChange, passing it the entered
  // search term...
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  // onInputChange then (1) sets the term property's value on SearchBars state and
  // (2) passes the search term to onSearchTermChange (a function passed to <SearchBar />
  //  as a prop, and therefore a method on the props object passed to the constructor).
  //  onSearchTermChange passes the search term into this.videoSearch(), videoSearch()
  //  does the YouTube search, which gets the video objects, stores them in state as an
  //  array, and sets the selectedVideo...which can then be used by VideList and VideoDetail.
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

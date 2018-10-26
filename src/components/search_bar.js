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
  // Setting the value of input like this makes the component a 'controlled component'.
  // Not sure how this works though...The value of input is set to be the value of the
  // term property in the state object, but why doesn't typing change the value of the
  // input? The event handler function is still called when there's an event on the
  // input element (i.e. you type), so the value of the term property should be changed
  // to whatever you type...and therfore the value of this.state.term is updated When
  // the component rerenders (which it does every time the event handler is called).
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          />
      </div>
    );
  }
}

export default SearchBar;

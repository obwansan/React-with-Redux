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
  // The SearchBar class's render method
  render() {
    // When the input element's value changes, the ES6 function runs (because it's our
    // event handler). The component's state (this.state.term) is set with the
    // new value of the input element. Whenever the event handler function is
    // called it causes the component to rerender and push the udated JSX to the DOM.
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })}/>
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;

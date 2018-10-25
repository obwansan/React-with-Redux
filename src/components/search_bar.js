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

  render() {
    // An ES6 style anonymous function. event is the argument.
    // If the function is on one line you don't need curly braces and
    // don't need parentheses around the parameter.
    return <input onChange={event => console.log(event.target.value)}/>;
    }
}

export default SearchBar;

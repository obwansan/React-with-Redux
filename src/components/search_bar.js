// Import React and pull off its Component property as a variable.
// Same as doing: const Component = React.Component;
import React, {Component} from 'react';

// class SearchBar extends React.Component
class SearchBar extends Component
{
  // This is a render method even though it doesn't use the normal ES6 class
  // method syntax i.e. render: function() {}
  render() {
    // Every interactive HTML element emits a 'change' event when interacted with.
    // The 'onChange' React defined keyword accesses that event.
    // Here the prop (property) onChange has the value of whatever onInputChange does.
    // The onInputChange event handler is passed to the element whose events we want it to handle!
    return <input onChange={this.onInputChange}/>;
    }

  // Event handler method naming convention: 'on' or 'handle' + Name of element + event
  // Pass the event handler the event object, which allows us to access the value entered
  // in the input element.
  onInputChange(event) {
    console.log(event);
  }
}

// Exports the SearchBar component. Allows it to be imported by other files.
export default SearchBar;

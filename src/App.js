import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicInfo from './BasicInfo'; // Import the BasicInfo component

// Make class component called App
class App extends Component {
  // Constructor will initialize the state
  constructor(props) {
    super(props); // Parent class constructor
    // Initialize state with an array of people objects (has 2)
    this.state = {
      people: [
        { name: 'Vyncent', number: '123-456-7890', dob: '01/01/1990' },
        { name: 'Susan', number: '704-654-3255', dob: '02/09/1979' },
        { name: 'Jerry', number: '704-654-9803', dob: '03/25/1987' },

      ]
    };
  }

  // The render method displays the UI
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* Will Iterate over the people array and render the BasicInfo component for the 3 people */}
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

// Export the App component
export default App;

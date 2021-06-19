import React, { Component } from 'react';
import data from './data'
import List from './list'
import './App.css';


class App extends Component {
  state = {
    people: data
  }


  render() {
    return (<main>
      <section className="container">
        <h3>{this.state.people.length} birthdays today</h3>
        <List people={this.state.people} />
        <button onClick={() => this.setState({ people: [] })}>Clear all</button>
      </section>
    </main>);
  }
}

export default App;
import React, { Component } from 'react'
import './App.css'
import ContributorList from '../ContributorList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Contributors</h1>
        </header>
        <h1>Contributors to facebook/create-react-app</h1>
        <ContributorList />
      </div>
    )
  }
}

export default App

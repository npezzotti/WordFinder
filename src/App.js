import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import WordList from './components/WordList'
import WordDefinitions from './components/WordDefinitions'
import Header from './components/Header'
// import Footer from './components/Footer'
import NotFound from './components/NotFound'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordList: [],
      value: "",
      word: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  updateDefinition = (word) => {
    this.setState({
      word: word.word
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home handleEvent={this.handleEvent} handleChange={this.handleChange} value={this.state.value}/>} />
            <div className="definitions-container">
            <Route exact path="/results" render= {() => <WordList wordList={this.state.wordList} updateDefinition={this.updateDefinition} value={this.state.value} />} />
            <Route exact path='/results/:word' render={() => <WordDefinitions word={this.state.word} />} />
            </div>
            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </main>
      </div>
    )
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)

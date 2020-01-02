import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Axios from 'axios'

class WordList extends Component {
    constructor(props) {
        super(props)
        this.state={
            wordList: []
        }
    }

    componentDidMount = async () => {
        try {
          const response = await Axios.get(`https://api.datamuse.com/words?ml=${this.props.value}`)
          this.setState({
            wordList: response.data
          })
        } catch (error) {
          console.log(error)
        }
      }
      
    render() {
        return (
            <div className="search-results">
                <h3 className="results-header">Words related to "{this.props.value}":</h3>
                <div className="words-container">
                    {this.state.wordList.map((word, index) => <Link className="words" onClick={() => this.props.updateDefinition(word)} to={`/results/${word.word}`} key={index}><div className="word-container">{word.word.charAt(0).toUpperCase() + word.word.slice(1)}</div></Link>)}
                </div>
            </div>
        )
    }
}

export default WordList
import React, {Component} from 'react'
import axios from 'axios'
import '../App.css';
import Definition from './Definition'
import { Link } from 'react-router-dom';

const api = "a1c8e79d-69e5-42d0-a8ed-bdc67c7a8c4b"

class WordDefinition extends Component {
    constructor(props) {
        super(props)
        this.state= {
            word: this.props.word,
            wordDef: [],
            partOfSpeech: ""
        }
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=${api}`)
            const wordDef = response.data[0].shortdef.filter(function( element ) {
                return element !== undefined;
                });
            this.setState({
                wordDef,
                partOfSpeech: response.data[0].fl.charAt(0).toUpperCase() + response.data[0].fl.slice(1)
        })
        } catch (error) {
        console.log(error)
        }
    }

    render() {
        return(
            <div>
                <div className="word-list">
                    <h1 className="word-title">{this.props.word.charAt(0).toUpperCase() + this.props.word.slice(1)}</h1>
                    <div className="part-of-speech">{this.state.partOfSpeech}</div>
                    <div className="definition">{this.state.wordDef && <Definition wordDef={this.state.wordDef}/>}</div>
                </div>
                <Link className="words" to="/results"><h2>Back</h2></Link>
            </div>
            )
    }
}

export default WordDefinition
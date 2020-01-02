import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <p className="search-header">Find me words related to...</p>
                <form className="form" onSubmit={this.props.handleEvent}>
                    <input type="text" placeholder="Enter word or phrase" onChange={this.props.handleChange} value={this.props.value}></input>
                    <Link to="/results"><button className="button" type="submit" value="Search">Search</button></Link>
                </form>
                <div className="quote">“Our language is funny – a ‘fat chance’ and a ‘slim chance’ are the same thing.” <br/>-J. Gustav White</div>
            </div>
        )
    }
}

export default Home
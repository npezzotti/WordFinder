import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

class Header extends Component {
    render () {
        return(
            <div className="header">
                <Link className="title" to="/"><h1 className="title">WordFinder</h1></Link>
            </div>
        )
    }
}

export default Header
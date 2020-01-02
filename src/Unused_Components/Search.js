import React from 'react'
import {Link} from 'react-router-dom'

const Search = (props) => {
    return(
        <div className="search-component">
            <form className="form" onSubmit={props.handleEvent}>
                <input type="text" onChange={props.handleChange} value={props.value}></input>
                <Link to="/results"><input type="submit" value="Submit"></input></Link>
            </form>
        </div>
    )
}

export default Search
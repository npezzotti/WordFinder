import React from 'react'
import '../App.css';

const Definition = (props) => {
    return(
        <div className="definition">{props.wordDef.map((definition, index) => {return <li className="definitions" key={index}>{definition}</li>})}
        </div>
    )
}

export default Definition
import React from 'react';
import ReactJson from 'react-json-view';

const Results = (props) =>{

    console.log(props)



    return(
      <section id="results">
        <div>Count: {props.count}</div>
        <ReactJson src={props.result} />
      </section>
    )
}

export default Results;
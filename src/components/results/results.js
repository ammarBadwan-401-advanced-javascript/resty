import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

const Results = (props) =>{

    console.log(props)



    return(
      <section id="results" className={`loading-${props.loading}`}>
        <div>Count: {props.count}</div>
        <ReactJson src={props.result} />
      </section>
    )
}

export default Results;
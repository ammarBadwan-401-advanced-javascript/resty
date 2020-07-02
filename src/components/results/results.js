import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

const Results = (props) =>{


    // let map = props.queries.map((value,index)=>{
    //   return <li><span>{value.method}</span>  {value.url}</li>
    // })


    return(
        <div className="resultsBar">
          <div>Count: {props.count}</div>
          <ReactJson src={props.result} />
        </div>
    )
}

export default Results;
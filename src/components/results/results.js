import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

const Results = (props) =>{


  console.log(props.queries)
    let map = props.queries.map((value,index)=>{
      return <li><span>{value.method}</span>  {value.url}</li>
    })
    // let theLocalStorage = JSON.parse(localStorage.getItem('history'));
    // let map = theLocalStorage.map((value)=>{
    //   return <li><span>{value.method}</span> {value.url}</li>
    // });

    return(
      <section id="results" className={`loading-${props.loading}`}>

        <aside>
          <ul>
            {map}
          </ul>
        </aside>
        <div className="resultsBar">
          <div>Count: {props.count}</div>
          <ReactJson src={props.result} />
        </div>
      </section>
    )
}

export default Results;
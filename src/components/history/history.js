import React from 'react';
import ReactJson from 'react-json-view';
const History = (props) =>{


    let theLocalStorage = JSON.parse(localStorage.getItem('history'));
    let map = theLocalStorage.map((value,index)=>{
        return (
        <React.Fragment>
            <li key={index}><span>{value.method}</span> {value.url}</li>
            <div id={index}>
            <ReactJson src={value.body} collapsed={true}/>
            </div>
        </React.Fragment>
        )
    });
    



    return(
        <div className="resultsBar">
          {map}
        </div>
    )
}

export default History;
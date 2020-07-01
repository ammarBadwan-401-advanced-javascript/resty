import React from 'react';
import './form.scss';
const superagent = require('superagent');

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      method: 'GET',
    };
  }

  handleURL = e =>{
    e.preventDefault();
    let url = e.target.value;
    this.setState({url});
  }

  handleMethod = e =>{
    e.preventDefault();
    let method = e.target.value;
    this.setState({method});
  }

  handleObject = e =>{
    let object = e.target.value;
    console.log('inside object')
    this.setState({object})
  }

  handleResult = async e =>{
    e.preventDefault();
    console.log('helloooooooo');
    
    console.log(this.state)
    this.props.toggleLoading();


    if (this.state.method === 'GET'){
      superagent.get(this.state.url)
      .then(info=>{
        let count = info.body.length;
        let result = {
          headers: info.headers,
          response: info.body,
        }
        let object = {method:this.state.method , url: this.state.url, body:result};
        this.props.queries(object);
        this.props.handler(count,result);
        
        this.props.toggleLoading();

        if (!localStorage.getItem('history')){
          localStorage.setItem('history',JSON.stringify([]));
        }
        let theLocalStorage = JSON.parse(localStorage.getItem('history'));
        theLocalStorage.push(object);
        localStorage.setItem('history',JSON.stringify(theLocalStorage));
        
      })
      .catch(err=>{
        let count = 'N/A'
        let result;
        if(err.response){
          result = {
            headers: err.response.headers,
            response: err.response.body,
          }
        } else {
          result = {
            headers: 'ERROR',
            response: 'ERROR',
          }
        }
        this.props.handler(count,result);
        this.props.toggleLoading();
        console.error('Erro: ' + err);
      });
    }
    this.props.toggleLoading();

  }






  render(){
    return(
      <main>

        <form onSubmit={this.handleResult}>
          <label>URL</label>
          <input onChange={this.handleURL} />
          <button type="submit">GO!</button>

          <div>
          <button onClick={this.handleMethod} value="GET" >GET</button>
          <button onClick={this.handleMethod} value="POST">POST</button>
          <button onClick={this.handleMethod} value="PUT">PUT</button>
          <button onClick={this.handleMethod} value="DELETE">DELETE</button>
          </div>

          <textarea onChange={this.handleObject} id="haha" placeholder="Enter JSON Object" rows = "5" cols = "60"></textarea>
        </form>

      </main>
    )
  }
}

export default Form;
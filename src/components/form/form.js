import React from 'react';
import './form.scss';

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

  handleResult = async e =>{
    e.preventDefault();
    this.props.toggleLoading();
    let raw = await fetch(this.state.url);
    let data = await raw.json();
    let count = data.length;
    let header = [];
    raw.headers.forEach(value=>{
      header.push(value);
    });
    console.log(header)

    let result = {
      headers: header,
      response: data,
    }
    
    this.props.handler(count,result);
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
        </form>

      </main>
    )
  }
}

export default Form;
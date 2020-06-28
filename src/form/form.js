import React from 'react';
import ReactDOM from 'react-dom';
import './form.scss';

class Main extends React.Component {
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

  handleResult = e =>{
    e.preventDefault();
    let target = document.getElementById('results');
    let result = <div>{this.state.method} <span>{this.state.url}</span> </div>
    ReactDOM.render(result,target);
  }




  render(){
    return(
      <main>

        <form>
          <label>URL</label>
          <input onChange={this.handleURL} />
          <button onClick={this.handleResult}>GO!</button>

          <div>
          <button onClick={this.handleMethod} value="GET" >GET</button>
          <button onClick={this.handleMethod} value="POST">POST</button>
          <button onClick={this.handleMethod} value="PUT">PUT</button>
          <button onClick={this.handleMethod} value="DELETE">DELETE</button>
          </div>
        </form>

        <section id="results">

        </section>

      </main>
    )
  }
}

export default Main;
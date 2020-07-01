import React from 'react';
import { Route, Link } from 'react-router-dom';
import './app.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form'
import Results from '../results/results';

let queries = [];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading: false,
      count:0,
      results:[],
    }
  }

  formHandler = (count,results)=>{
    this.setState({count,results});
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  queryHandler = (object) =>{
    queries.unshift(object)
  }





  render(){
    return (
      <React.Fragment>
          <Header />
          <Route path="/" exact>
          <Form handler={this.formHandler} toggleLoading={this.toggleLoading} queries={this.queryHandler}/>
          <section id="results" className={`loading-${this.state.loading}`}>
          <aside>
            <ul>
              {map}
            </ul>
          </aside>  
          <Results loading={this.state.loading} count={this.state.count} result={this.state.results} queries={queries} />
          </section>
          </Route>
          <Route path="/history" exact> <h3>HELLO!</h3></Route>

          <Footer />
      </React.Fragment>
    )
  }
}

let theLocalStorage = JSON.parse(localStorage.getItem('history'));
let map = theLocalStorage.map((value)=>{
  return <li><span>{value.method}</span> {value.url}</li>
});

export default App;

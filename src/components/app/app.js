import React from 'react';
import { Route } from 'react-router-dom';
import './app.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form'
import Results from '../results/results';
import History from '../history/history'

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
          <Route path="/history" exact><History/></Route>

          <Footer />
      </React.Fragment>
    )
  }
}

if (!localStorage.getItem('history')){
  localStorage.setItem('history',JSON.stringify([]));
}
let theLocalStorage = JSON.parse(localStorage.getItem('history'));
let map = theLocalStorage.map((value,index)=>{
  return <li key={index}><span>{value.method}</span> {value.url}</li>
});

export default App;

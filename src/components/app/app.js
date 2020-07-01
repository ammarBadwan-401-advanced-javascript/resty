import React from 'react';
import './app.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form'
import Results from '../results/results';


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
    console.log("this.state.loading: ",this.state.loading)
    this.setState({ loading: !this.state.loading })
  }






  render(){
    return (
      <React.Fragment>
          <Header />
          <Form handler={this.formHandler} toggleLoading={this.toggleLoading} />
          <Results loading={this.state.loading} count={this.state.count} result={this.state.results} />
          <Footer />
      </React.Fragment>
    )
  }
}

export default App;

import React from 'react';
import './app.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      results:[],
    }
  }

  formHandler = (count,results)=>{
    this.setState({count,results});
  }





  render(){
    return (
      <React.Fragment>
          <Header />
          <Form handler={this.formHandler} />
          <Footer />
      </React.Fragment>
    )
  }
}

export default App;

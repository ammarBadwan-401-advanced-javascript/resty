import React from 'react';
import './app.scss'
import Header from './header/header';
import Footer from './footer/footer';
import Main from './form/form'











class App extends React.Component{
  render(){
    return (
      <React.Fragment>
          <Header />
          <Main />
          <Footer />
      </React.Fragment>
    )
  }
}

export default App;

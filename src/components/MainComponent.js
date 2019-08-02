import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2 " />
            <div className="col-12 col-md-8" />
            <div className="col-12 col-md-2" />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;

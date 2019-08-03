import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SplytMap from './SplytMapComponent';
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="d-flex justify-content-center" id="map">
            <SplytMap />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;

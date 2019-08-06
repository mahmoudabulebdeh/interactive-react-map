import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Map from './MapComponent';
import { connect } from 'react-redux';

import { fetchTaxies } from '../redux/actions/ActionCreators';

const mapStateToProps = state => {
  return {
    taxies: state.taxies,
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTaxies: count => {
    dispatch(fetchTaxies(count));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchTaxies();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="d-flex justify-content-center" id="map">
            <Map
              taxies={this.props.taxies.taxies}
              isLoading={this.props.taxies.isLoading}
              errMess={this.props.taxies.errMess}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

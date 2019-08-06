import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import styled from 'styled-components';
import { token, latitude, longitude, styles } from './mapConfig';

const SplytMap = ReactMapboxGl({
  accessToken: token,
});

const Mark = styled.div`
  background-color: #e74c3c;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 4px solid #eaa29b;
`;

const TaxiesMarks = ({ drivers }) => {
  if (drivers != null) {
    return (
      <React.Fragment>
        {drivers.map((driver, i) => {
          return (
            <Marker
              coordinates={[
                driver.location.longitude,
                driver.location.latitude,
              ]}
              key={i}
              anchor="bottom"
            >
              <Mark />
            </Marker>
          );
        })}
      </React.Fragment>
    );
  }
  return <React.Fragment />;
};

class Map extends Component {
  render() {
    const { taxies, isLoading, errMess } = this.props;

    return (
      <SplytMap
        container="map"
        style={styles.streets}
        containerStyle={{
          height: 'calc(100vh - 200px)',
          width: 'calc(100vw - 20px)',
        }}
        center={[longitude, latitude]}
        zoom={[13]}
      >
        {!isLoading && !errMess && <TaxiesMarks drivers={taxies.drivers} />}
      </SplytMap>
    );
  }
}

export default Map;

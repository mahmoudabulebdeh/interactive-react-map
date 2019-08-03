import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { token, styles } from './config';
const Map = ReactMapboxGl({
  accessToken: token,
});

class SplytMap extends Component {
  // state = {
  //   viewport: {
  //     width: 800,
  //     height: 600,
  //     latitude: -0.0964509,
  //     longitude: 51.5049375,
  //     zoom: 8,
  //   },
  // };

  render() {
    return (
      <Map
        container="map"
        style={styles.londonCycle}
        containerStyle={{
          height: 'calc(100vh - 200px)',
          width: '100vw',
        }}
        center={[-0.095751, 51.5143124]}
        zoom={[16]}
      >
        <Marker coordinates={[-0.095751, 51.5143124]} anchor="bottom">
          <div className="mapMarkerStyle" />
        </Marker>
      </Map>
    );
  }
}

export default SplytMap;

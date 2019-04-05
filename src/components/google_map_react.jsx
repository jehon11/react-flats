/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.885707,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    const { selectedFlat } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={selectedFlat.lat}
            lng={selectedFlat.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

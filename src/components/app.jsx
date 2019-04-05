import React, { Component } from 'react';
import flats from '../../data/flats'
import FlatList from './flat_list';
import SimpleMap from './google_map_react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flat: null,
    };
  }

  render() {
    return (
      <div>
        <FlatList flatList={flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;

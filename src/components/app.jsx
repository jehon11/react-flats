import React, { Component } from 'react';
import flats from '../../data/flats'
import FlatList from './flat_list';
import SimpleMap from './google_map_react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flat: flats[0],
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selected_flat: flat
    });
  };

  render() {
    return (
      <div style={{ margin: 0 }}>
        <FlatList flatList={flats} selectFunction={this.selectFlat} />
        <div className="map-container">
          <SimpleMap selectedFlat={this.state.selected_flat} />
        </div>
      </div>
    );
  }
}

export default App;

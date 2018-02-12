import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getTracks } from './actions/tracks';

class App extends Component {
  addTrack = () => {
    console.log('add track', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value)
    this.trackInput.value = ''
  }
  findTrack = () => {
    console.log(this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value)
  }
  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <div>
          <input type="text" className="trackInput" ref={(input) => this.trackInput = input} />
          <button type="button" name="button" className="addTrack" onClick={this.addTrack.bind(this)}>Add Track</button>
        </div>
        <div>
          <input type="text" className="trackInput" ref={(input) => this.searchInput = input} />
          <button type="button" name="button" className="findTrack" onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get Tracks</button>
        </div>
        <ul className="list">
          {
            this.props.tracks.map((track, index) =>
            <li key={index}>{track.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default connect (
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);

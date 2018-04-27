import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#fff'
};
let fakeServerData = {
  user: {
    name: 'Manuel',
    playlists: [
      {
        name: 'My Favorites',
        songs: [{name: 'Beat It', duration: 1345}, {name: 'Chameleon', duration: 1236}, {name: 'Wonderwall', duration: 70000}],
      },
      {
        name: 'Discover Weekly',
        songs: [{name: 'Circus', duration: 1345}, {name: 'In The End', duration: 1458}, {name: 'American Woman', duration: 65445}],
      },
      {
        name: 'Another Playlist - the best!',
        songs: [{name: 'Black Hole Sun', duration: 1345}, {name: 'Ghosts', duration: 6500}, {name: 'Bangaranga', duration: 100500}],
      },
      {
        name: 'Playlist - yeah!',
        songs: [{name: 'Hey Brother', duration: 1345}, {name: 'Wake Me Up', duration: 7548}, {name: 'Tokio', duration: 30000}],
      }
    ]
  }
};

class PlaylistsCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
        return songs.concat(eachPlaylist.songs)
      }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 2</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}};
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
          <PlaylistsCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={{...defaultStyle}}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;

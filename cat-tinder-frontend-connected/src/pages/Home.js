import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    ListGroup
} from 'react-bootstrap'
import YouTube from 'react-youtube';

class Home extends Component {
  render() {
    const opts = {
      height: 500,
      width: 800,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return (
      <YouTube
        videoId="t8tjT9MA7yU"
        opts={opts}
        onReady={this._onReady}
      />
    )
  }
}

export default Home

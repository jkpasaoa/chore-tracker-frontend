import React, { Component } from 'react'

import MouseParticles from 'react-mouse-particles'

class SparklingCursor extends Component {
  render() {
    return (
      <>
        <div></div>
        <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
      </>
    )
  }
}
export default SparklingCursor;

// Code for SparklingCursor component obtained
// from: https://github.com/lindelof/react-mouse-particles
// npm install --save react-mouse-particles

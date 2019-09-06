
import React, { Component } from 'react';
import Fade from 'react-reveal';
import disableScroll from 'disable-scroll'; // remove from modules!!

class App extends Component {
  render() {
    return (
      <Fade exit={true} unmountOnExit={true}>
        <h1 style={{ position: 'relative', top: '8em', textAlign: 'center', background: 'red', margin: 'auto'}}>
        THIS IS OUR LOADER PAGE
        </h1>
      </Fade>
    )
  }
}

export default App
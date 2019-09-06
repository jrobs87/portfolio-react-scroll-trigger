
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import Fade from 'react-reveal';


class App extends Component {
  render() {
    return (
      <Fade exit={true}>
        <div style={{  position: 'relative', top: '20em', textAlign: 'center', background: 'none', margin: 'auto'}}>
        LOADER PAGE
        <Link to='/scroll'><Button variant="primary">Enter</Button></Link>
        </div>
        
      </Fade>
    )
  }
}

export default App
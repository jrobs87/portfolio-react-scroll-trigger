import React, { Component } from 'react';
import Fade from 'react-reveal'

class Panel extends Component {
    render() {
        // console.log(this.props);
        if (this.props.keys === 0) {
            return (
                <Fade exit={true} unmountOnExit={true}>
                    <div style={{ position: 'fixed', zIndex: 500, top: 0, left: 0, width: '100%', height: '100vh' }}>
                        <h1 style={{ fontSize: '3em', paddingTop: '2em', fontWeight: 700}}>JOHN ROBERTSON</h1>
                        <p>This is the splash page with my ugly mug on it.</p>
                    </div>
                </Fade>

            )
        } else 
        return (
        <div>
            <Fade bottom duration={111} distance={'20px'} exit={true} key={this.props.keys}>
                <h3>{this.props.view.title}</h3>
            </Fade>
            <Fade bottom distance={'10px'}>
            <p key={this.props.keys}>
            {this.props.view.blurb}
            </p>
            </Fade>
            <div style={{ position: 'fixed', bottom: 1, left: 2}}>
                {this.props.keys} of 3
            </div>
        </div>
        )
    }
}

export default Panel
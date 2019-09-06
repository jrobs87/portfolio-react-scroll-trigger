import React, { Component } from 'react';
import Panel from './panel';

const style = {
    width: '100%',
    height: '90vh',
    fontSize: '1em',
    // lineHeight: '0.66em',
    padding: '2em',
}

class ScrollTester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollStatus: 'end',
            panelCurrent: 0,
            panels: [
                {
                    title: 'landing'
                },
                {
                    title: 'Bork',
                    blurb: 'A fun little project with a big heart.  Swipe-based dog adoption app modeled on Tinder features.',
                    year: 2019,
                    client: 'Georgia Tech'
                },
                {
                    title: 'Immersio',
                    blurb: 'A real-time langauge translation messenger app.',
                    year: 2019,
                    client: 'Georgia Tech'
                }
            ],
            scrollDirection: '',
            panelNext: '',
            disableScroll: false
        };

        // initial timeout
        this._timeout = null;

        // bind the scroll handler to the instance
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        // deltaY helps prevent errant scrolling by firing only if scroll Y exceeds a threshold - critical!!!
        // determines scroll sensitivity
        if (e.deltaY >= 0 || e.deltaY <= 0) {
            // check for direction
            if (e.nativeEvent.wheelDelta > 0) {
                this.setState({
                    direction: 'up'
                })
            } else {
                if (e.nativeEvent.wheelDelta < 0)
                    this.setState({
                        direction: 'down'
                    })
            }
        }

        if (this._timeout) {
            clearTimeout(this._timeout);
        }

        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.setState({
                scrollStatus: 'end'
            })

        

            // handle scroll render!!!
            if (this.state.scrollStatus === 'end') {
                    // handle view change here!!!
            let current = this.state.panelCurrent;
            const length = this.state.panels.length;
            let direction = this.state.direction;
            let panelNext = this.state.panelNext;
            // console.log(length);
                // set next panel
                if (direction === 'down') {
                    panelNext = this.state.panelCurrent + 1
                    this.setState({
                        panelNext: panelNext
                    });
                } else {
                    panelNext = this.state.panelCurrent - 1
                    this.setState({
                        panelNext: panelNext
                    });
                }

                // check limits and renders new view
                if (this.state.panelNext > length - 1 || this.state.panelNext < 0) {
                    console.log('Scroll threshold reached!');
                } else {
                    if (this.state.disableScroll) {
                        console.log('Prevented accidental scroll!');
                    } else {
                        this.setState({
                            panelCurrent: panelNext,
                            disableScroll: true
                        });
                        setTimeout(() => {
                            this.setState({
                                disableScroll: false
                            });
                        }, 444);
                        // log out the movements
                        console.log(`d: ${this.state.direction} c: ${this.state.panelCurrent} > n: ${this.state.panelNext}`);
                    }
                }
            }
        }, 22); // timeout after scroll end before executing view update (critical to catch scroll end)

        // set the scrolling status while moving
        if (this.state.scrollStatus !== 'scrolling') {
            this.setState({
                scrollStatus: 'scrolling'
            });
        }
    }

    render() {
        return <div style={style} onScroll={this.handleScroll} onWheel={this.handleScroll}>
            <p>JOHN ROBERTSON</p>
            <br />
            <Panel view={this.state.panels[this.state.panelCurrent]} state={this.state} keys={this.state.panelCurrent} />
        </div>
    }
}

export default ScrollTester

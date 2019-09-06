import React, { Component } from 'react';
import Fade from 'react-reveal';
import { Container, Col, Row } from 'react-bootstrap';


class Panel extends Component {
    render() {
        // console.log(this.props);
        if (this.props.keys === 0) {
            return (
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Fade exit={true} unmountOnExit={true}>
                                <div style={{ fontSize: '3em', paddingTop: '2em', fontWeight: 800 }}>
                                    <h1>JOHN ROBERTSON</h1>
                                    <p>This is the splash page with my ugly mug on it.</p>
                                </div>
                            </Fade>
                        </Col>
                    </Row>

                </Container>


            )
        } else
            return (
                <Container fluid={true}>
                    <Row style={{ paddingTop: '7em' }}>
                        <Col>
                            <Fade bottom duration={66} distance={'10px'} exit={true} key={this.props.keys}>
                                <h3>{this.props.view.title}</h3>
                            </Fade>
                            <Fade bottom cascade distance={'10px'}>
                                <p key={this.props.keys + this.props.view.blurb}>
                                    {this.props.view.blurb}
                                </p>
                                <p key={this.props.keys + this.props.view.client}>{this.props.view.client + ' ' + this.props.view.year}</p>
                            </Fade>
                            <div style={{ position: 'fixed', bottom: 1, left: 2 }}>
                                {this.props.keys} of {this.props.state.panels.length - 1}
                            </div>
                        </Col>
                    </Row>

                </Container>
            )
    }
}

export default Panel
import React, { Component } from 'react';
import Fade from 'react-reveal';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './dude.jpg';


const backgroundImage = `url(${img})`

class Panel extends Component {
    render() {
        // console.log(this.props);
        if (this.props.keys === 0) {
            return (
                <Fade exit={true}>
                    <div style={{ height: '100vh', width: '100%', backgroundImage: backgroundImage, backgroundSize: 'cover', color: 'white', position: 'fixed', top: 0, left: 0, padding: '7em' }}>
                        <Container fluid={true}>
                            <Row>
                                <Col lg={9} md={6}>

                                    <div style={{ paddingTop: '2em' }}>
                                        <h1 style={{ fontWeight: 800, fontSize: '9em', lineHeight: '0.88em' }}>Portfolio From Atlanta 2019</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '2em' }}>
                                <Col lg={6}>
                                    <p>
                                        Scroll for the hot shit.
                            </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fade>
            )
        } else
            return (
                <div>


                    <Fade exit={true}>
                        <Container fluid={true} style={{ border: '1px solid grey', borderRadius: '0em', height: '90vh', padding: '6em' }}>
                            <Row style={{ paddingTop: '7em' }}>
                                <Col lg={5}>
                                    <Fade top left duration={66} distance={'12px'} exit={true} key={this.props.keys}>
                                        <h1>{this.props.view.title}</h1>
                                    </Fade>
                                    <Fade bottom right distance={'12px'}>
                                        <p key={this.props.keys + this.props.view.blurb}>
                                            {this.props.view.blurb}
                                        </p>
                                        <h6 key={this.props.keys + this.props.view.client}>{this.props.view.client + ' - ' + this.props.view.year}</h6>
                                      
                                    </Fade>

                                </Col>
                            </Row>
                        </Container>
                        </Fade>
                   
                    <div style={{ position: 'fixed', top: '1.41em', left: '0em', width: '100%', textAlign: 'center' }} >
                        <div style={{ background: 'white', margin: 'auto', width: '4em', padding: '0em' }}>
                        <Fade>
                            <h6>
                            
                            {this.props.keys} | {this.props.state.panels.length - 1}
                          
                            </h6>
                            </Fade>
                        </div>

                    </div>
                    <div style={{ position: 'fixed', bottom: '1.1em', left: '0em', width: '100%', textAlign: 'center' }}>
                        <div style={{ background: 'white', margin: 'auto', width: '8em', padding: '0em' }}>
                            <h6>
                            <Fade>
                            <Link to='/rtg'>
                            <Button variant="dark" style={{ border: 'none', background: this.props.view.color, borderRadius: 0}}>CASE STUDY</Button>
                            </Link>
                            </Fade>
                            </h6>
                        </div>

                    </div>
                  
                </div>
            )
    }
}

export default Panel
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import './index.css';
import App from './App';
import RTG from './RTG';
import ScrollTester from './ScrollTester'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fade from 'react-reveal';

function Routing() {

    return (
        <Router >
            <Route exact path='/' component={App} />
            <Route path='/scroll' component={ScrollTester} />
            <Route path='/rtg' component={RTG} />

            <Fade>
                <div style={{ position: 'fixed', zIndex: 2000, top: 0, right: '3em' }}>
                    <Link to='/'> <Button variant="link">Loader</Button></Link>
                    <Link to='/scroll'><Button variant="link">Scroller</Button></Link>
                    <Link to='/rtg'><Button variant="link">Sandbox</Button></Link>
                </div>
            </Fade>

        </Router>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

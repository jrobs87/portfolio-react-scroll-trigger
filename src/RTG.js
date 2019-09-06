import React from 'react';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';

function RTG() {
    return (
        <Fade exit={true}>
            <Container fluid={true}>
                <h1 style={{ position: 'relative', top: '8em', textAlign: 'center', background: 'none', margin: 'auto' }}>
                    REACT TRANS GROUP TEST
    </h1>
            </Container>

        </Fade>
    )


}

export default RTG
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "components/portfolio/PortfolioItemOne";

const PortfolioGrid = ({wide}) => {
    return (
        <div className="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container fluid={!!wide} className={wide ? 'plr--30' : ''}>
                <Row className="mt--n30">
                    {data.map(portfolio => (
                        <Col sm={6} lg={4} key={portfolio.id} className="mt--30">
                            <PortfolioItem
                                title={portfolio.title}
                                thumb={require('../../../assets/img/portfolio/grid/' + portfolio.thumb)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const data = [
   
    {
        id: 6,
        title: "A Golden Age of Design2",
        thumb: "portfolio-5.jpg"
    },
    {
        id: 7,
        title: "B-sharp High-end Audio",
        thumb: "portfolio-6.jpg"
    },
    {
        id: 8,
        title: "Measure Digital Progress",
        thumb: "portfolio-7.jpg"
    },
    {
        id: 9,
        title: "Digital Marketing Basics",
        thumb: "portfolio-8.jpg"
    },
    {
        id: 9,
        title: "Digital Marketing Basics",
        thumb: "portfolio-9.jpg"
    }
]

export default PortfolioGrid;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BossiniImage from '../../assets/images/new/1.webp';
import LiNingImage from '../../assets/images/new/4.webp';
import PeakImage from '../../assets/images/portfolio/portfolio-3.jpg';
import CciluImage from '../../assets/images/portfolio/portfolio-4.jpg';

const portfolioData = [
  {
    id: 1,
    title: 'Nilaas',
    thumb: BossiniImage,
    category: 'FAMILY SHOPING STATION112',
    link: '/bossini',
  },
  {
    id: 2,
    title: 'QuickFynd',
    thumb: LiNingImage,
    category: 'MAKE YOUR OWN WAY12',
    link: '/li-ning',
  },
  {
    id: 3,
    title: 'PEAK',
    thumb: PeakImage,
    category: 'ULTIMATE SPORT SHOP',
    link: '/peak',
  },
  {
    id: 4,
    title: 'CCILU',
    thumb: CciluImage,
    category: 'SUSTAINABLE SHOE DESIGNS',
    link: '/ccilu',
  },
  // {
  //   id: 5,
  //   title: 'ARGEVILLE',
  //   thumb: ArgevilleImage,
  //   category: "CRAFTING TOMORROW'S SCENTS",
  //   link: '/argeville',
  // },
  // {
  //   id: 6,
  //   title: 'Shopcin',
  //   thumb: Shopcin,
  //   category: "STYLE UNIFIED:MULTI-BRAND HUB",
  //   link: '/shopcin',
  // },
];

const PortfolioItemThree = ({ id, title, thumb, category, link, className }) => {
  const portfolioItemLink = `${process.env.PUBLIC_URL}${link}`;

  return (
    <Col sm={12} lg={3} key={id}>
      <div className={`portfolio with-caption mt--30 ${className}`}>
        <div className="thumb video-with-thumb">
          <a href={portfolioItemLink}>
            <img src={thumb} alt={title} style={{borderRadius:"10PX"}} />
          </a>
        </div>
        <div className="caption-bottom text-start">
          <div className="info">
            <h5 className="heading heading-h5">
              <a href={portfolioItemLink}>{title}</a>
            </h5>
            <p className="bk_pra">{category}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

const PortfolioList = () => {
  return (
    <Container>
      <Row className="mt--n30">
        {portfolioData.map((item) => (
          <PortfolioItemThree
            key={item.id}
            id={item.id}
            title={item.title}
            thumb={item.thumb}
            category={item.category}
            link={item.link}
            className="your-custom-class"
          />
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioList;

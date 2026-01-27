import React from 'react';
import BossiniImage from '../../assets/images/new/1.webp';
import LiNingImage from '../../assets/images/new/4.webp';
import PeakImage from '../../assets/images/portfolio/portfolio-3.jpg';
import CciluImage from '../../assets/images/portfolio/portfolio-4.jpg';
import './PortfolioItemThree.css';

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
    <div key={id} className={`portfolio-card ${className}`}>
      <a href={portfolioItemLink} className="portfolio-thumb">
        <img src={thumb} alt={title} />
        <span className="thumb-overlay" />
      </a>
      <div className="portfolio-caption">
        <div className="info">
          <h5 className="portfolio-title">
            <a href={portfolioItemLink}>{title}</a>
          </h5>
          <p className="portfolio-category">{category}</p>
        </div>
        <div className="portfolio-link">→</div>
      </div>
    </div>
  );
};

const PortfolioList = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-grid">
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
      </div>
    </div>
  );
};

export default PortfolioList;

import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="sub-title">SHOP</span>
      </div>
    </div>
  );
};

export default MenuItem;

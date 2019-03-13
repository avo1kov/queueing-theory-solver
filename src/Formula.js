import React from 'react';

const Formula = ({ img, title }) => (
    <div className="formula-container">
        <div>{title}</div>
        <img src={img} alt={title} />
        <div className="value">5</div>
    </div>
);

export default Formula;
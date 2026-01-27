import React from 'react';

const Copyright = ({ className }) => {
    return (
        <p className={className || ''}>
            © {new Date().getFullYear()} Nilaas · Developed by <a href="https://squarecom.ae" target="_blank" rel="noopener noreferrer">Squarecom IT Solution</a>
        </p>
    );
};

export default Copyright;

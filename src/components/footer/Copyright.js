import React from 'react';

const Copyright = ({ className }) => {
    return (
        <p className={className ? className : ''}>
            © {new Date().getFullYear()} Nilaas
        </p>
    );
};

export default Copyright;

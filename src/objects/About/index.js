import React from 'react';
import './styles.css';

const About = ({ children, className = "" }) => (
    <article className={`about ${className}`}>
        {children}
    </article>
);

export default About;
import React from 'react';
import './styles.css';
import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import Menu from '../../objects/Menu';

const Header = ({ onClick }) => (
    <header className="header">
        <LogoCollab />
        <AboutLink onClick={onClick} />
        <Menu onClick={onClick} />
    </header>
);

export default Header;
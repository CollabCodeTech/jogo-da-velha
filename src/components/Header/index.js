import React from 'react';
import './styles.css';
import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import MenuGame from '../../objects/MenuGame';

const Header = ({ onClick }) => (
    <header className="header">
        <LogoCollab />
        <AboutLink onClick={onClick} />
        <MenuGame onClick={onClick} />
    </header>
);

export default Header;
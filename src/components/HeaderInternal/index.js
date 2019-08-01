import React from 'react';
import './styles.css';

import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const HeaderInternal = ({ onClick }) => (
    <header className="header-internal">
        <LogoCollab light />
        <AboutLink className="-light" onClick={onClick} />
        <IconClose onClick={onClick} />
    </header>
);

export default HeaderInternal;
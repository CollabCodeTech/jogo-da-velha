import React from 'react';

import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const HeaderInternal = () => (
    <header className="header-internal">
        <LogoCollab light />
        <AboutLink className="-light" />
        <IconClose />
    </header>
);

export default HeaderInternal;
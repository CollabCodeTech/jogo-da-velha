import React from 'react';
import CollabCode from '../../img/logo.png';
import CollabCodeLight from '../../img/logo-light.png';

const LogoCollab = ({ light = false }) => (
    <img className="logo-collab"
        src={light ? CollabCodeLight : CollabCode}
        alt="Logo da CollabCode"
    />
);

export default LogoCollab;
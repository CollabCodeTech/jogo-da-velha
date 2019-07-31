import React from 'react';
import './styles.css'
import Profile from '../../img/profile.jpg';
import GitHub from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'

import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => (
    <dl className="profile-user">
        <dd className="avatar">
            <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
        </dd>
        <dt className="title">Marco Bruno</dt>
        <dd className="description">Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer de código, instrutor e dev na CollabCode</dd>
        <dd className="socials">
            <IconSocial action="https://github.com/marcobrunobr" src={GitHub} alt="Logo da GitHub" />
            <IconSocial action="https://linkedin.com/in/marcobrunobr/" src={Linkedin} alt="Logo da Linkedin" />
            <IconSocial action="https://www.facebook.com/marco.bruno.br" src={Facebook} alt="Logo da Facebook" />
            <IconSocial action="https://twitter.com/marcobrunobr" src={Twitter} alt="Logo da Twitter" />
            <IconSocial action="https://www.instagram.com/marcobrunobra" src={Instagram} alt="Logo da Instagram" />
        </dd>
    </dl>
);

export default ProfileUser;
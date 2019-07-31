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
            <IconSocial src={GitHub} alt="Logo da GitHub" />
            <IconSocial src={Linkedin} alt="Logo da Linkedin" />
            <IconSocial src={Facebook} alt="Logo da Facebook" />
            <IconSocial src={Twitter} alt="Logo da Twitter" />
            <IconSocial src={Instagram} alt="Logo da Instagram" />
        </dd>
    </dl>
);

export default ProfileUser;
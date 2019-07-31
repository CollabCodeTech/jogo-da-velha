import React from 'react';
import './styles.css'
import Profile from '../../img/profile.jpg';

import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
    <dl className="profile-user">
        <dd className="avatar">
            <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
        </dd>
        <dt className="title">Marco Bruno</dt>
        <dd className="description">Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer de código, instrutor e dev na CollabCode</dd>
    </dl>
);

export default ProfileUser;
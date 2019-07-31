import React from 'react';
import Profile from '../../img/profile.jpg';

import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
    <dl>
        <dd>
            <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
        </dd>
        <dt>Marco Bruno</dt>
        <dd>Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer de código, instrutor e dev na CollabCode</dd>
    </dl>
);

export default ProfileUser;
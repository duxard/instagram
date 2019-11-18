import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
            alt="descr"
            name="Scot"
      />
      <Palette />
    </div>
  );
}

export default Profile;

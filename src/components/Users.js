import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
            alt="descr"
            name="Scot"
      />
      <div className="users__block">
        <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
              alt="descr"
              name="Scot"
              min
        />
        <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
              alt="descr"
              name="Scot"
              min
        />
        <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
              alt="descr"
              name="Scot"
              min
        />
        <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
              alt="descr"
              name="Scot"
              min
        />
      </div>
    </div>
  );
}

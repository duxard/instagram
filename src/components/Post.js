import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
              alt="descr"
              name="Scot"
              min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sed esse quasi dolorum officiis quod iste non laboriosam delectus dolores, possimus iure dignissimos commodi eveniet, nisi doloremque aut ipsum rerum.</p>
        </div>
      </div>
    );
  }
}

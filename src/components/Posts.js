import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/a2/40/1a/a2401ae5-f5a7-29ed-41b8-cda9d6e36623/source/256x256bb.jpg" alt="one"/>
        <Post src="https://vignette.wikia.nocookie.net/gardenpaws/images/4/46/Purple_Flower.png/revision/latest?cb=20180915140453" alt="second"/>
      </div>
    );
  }
}

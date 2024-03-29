import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import User from './User';
import ErrorMsg from './Error';

export default class Posts extends Component {
  instaServiceInstance = new InstaService();
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.instaServiceInstance.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true
    });
  }

  renderItems(array) {
    return array.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;
      return (
        <div key={id} className="post">
          <User src={photo}
                alt={altname}
                name={name}
                min
          />
          <img src={src} alt={alt} />
          <div className="post__name">
            {name}
          </div>
          <div className="post__descr">
            <p>{descr}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const {error, posts} = this.state;
    const items = this.renderItems(posts);

    if(error) {
      return <ErrorMsg />
    }

    return (
      <div className="left">
        {items}
      </div>
    );
  }
}

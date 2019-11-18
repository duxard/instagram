import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import ErrorMsg from './Error';

export default class Palette extends Component {
  instaServiceInstance = new InstaService();
  state = {
    error: false,
    photos: []
  };

  updatePhotos() {
    this.instaServiceInstance.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos
    });
  }

  componentDidMount() {
    this.updatePhotos();
  }

  renderItems(arr) {
    return arr.map((item, indx) => {
      return (
        <img src={item.src} alt={item.alt} key={indx}></img>
      );
    });
  }

  render() {
    const { error, photos } = this.state;

    if (error) {
      return <ErrorMsg />
    }

    const items = this.renderItems(photos);

    return (
      <div className="palette">
        { items }
      </div>
    );
  }
}

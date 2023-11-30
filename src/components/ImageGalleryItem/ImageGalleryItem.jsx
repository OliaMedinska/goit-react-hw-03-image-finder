import {
  GalleryItem,
  GalleryImg,
  GalleryModal,
} from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: true,
  };

  //metod true <=> false
  handleClick(e) {
    if (e.target === e.currentTarget) {
      // тут змінити isOpen в стейті на false
    }
  }

  render() {
    const { img, imgWeb, name } = this.props;
    const { isOpen } = this.state;

    return (
      <GalleryItem>
        <GalleryImg src={imgWeb} alt={name} />
        {isOpen && (
          <GalleryModal>
            <img src={img} alt={name} />
          </GalleryModal>
        )}
      </GalleryItem>
    );
  }
}

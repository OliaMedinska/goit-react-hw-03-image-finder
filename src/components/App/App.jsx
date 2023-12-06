import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { LoaderButton } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    galleryItems: [],
    namePhoto: '',
    page: 1,
    isLoading: false,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { namePhoto, page } = this.state;

    const updatedImages = async () => {
      if (prevState.page !== page || prevState.namePhoto !== namePhoto) {
        const newImages = await fetchImages(namePhoto, page);
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...newImages.hits],
          loadMore: this.state.page < Math.ceil(newImages.totalHits / 12),
        }));
      }
    };

    updatedImages();
  }

  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmitPhoto = e => {
    e.preventDefault();

    this.setState(prevState => ({
      galleryItems: [],
      namePhoto: e.target.search.value.trim(),
      page: 1,
    }));
  };

  render() {
    const { galleryItems, isLoading, loadMore } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmitPhoto} />
        <ImageGallery items={galleryItems} />
        {isLoading && <Loader></Loader>}
        {galleryItems.length > 0 && loadMore && <LoaderButton onClick={this.increasePage} />}
      </>
    );
  }
}

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
  };

  async componentDidMount() {
    const { namePhoto, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const initialImages = await fetchImages(namePhoto, page);
      this.setState({ galleryItems: initialImages });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { namePhoto, page } = this.state;

    const updatedImages = async () => {
      if (prevState.page !== this.state.page) {
        const newImages = await fetchImages(namePhoto, page);
        this.setState({ galleryItems: newImages });
      }
    };
    updatedImages();
  }

  increasePage() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    const { galleryItems } = this.state;

    return (
      <>
        <Searchbar />
        <ImageGallery items={galleryItems} />
        {galleryItems.length === 0 && <Loader></Loader>}
        <LoaderButton onClick={this.increasePage} />
      </>
    );
  }
}

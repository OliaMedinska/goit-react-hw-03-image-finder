import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { LoaderButton } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    galleryItems: [],
    page: 1,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const initialImages = await fetchImages();
      this.setState({ galleryItems: initialImages });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // async onLoadMore() {
  //   this.state.page += 1;
  //   const { data } = await fetchImages();
  //   this.setState({ galleryItems: data });
  // }

  render() {
    const { galleryItems } = this.state;

    return (
      <>
        <Searchbar />
        <ImageGallery items={galleryItems} />
        {galleryItems.length === 0 && <Loader></Loader>}
        <LoaderButton onClick={this.onLoadMore} />
      </>
    );
  }
}

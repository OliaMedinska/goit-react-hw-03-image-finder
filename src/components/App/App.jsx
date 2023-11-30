import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
import { LoaderButton } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { fetchImages } from "api";

export class App extends Component {
state = {
  galleryItems: [],
};

async componentDidMount(){
  try {
    this.setState({isLoading: true});
    const initialImages = await fetchImages();
    this.setState({galleryItems: initialImages});
  } catch (error) {
  } finally {
    this.setState({ isLoading: false});
  }
}


render() {
  const { galleryItems } = this.state;

return (
  <>
  <Searchbar/>
  <ImageGallery items={galleryItems}/>
  <Loader/>
  <LoaderButton/>
  </>
)
};
};

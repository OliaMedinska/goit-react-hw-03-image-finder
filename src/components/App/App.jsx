import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
import { LoaderButton } from "components/Button/Button";
import { fetchImages } from "api";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export class App extends Component {
state = {
  galleryItems: [],
};


// async componentDidMount() {
//   try {
//     const initialImages = await fetchImages();
//     this.setState({
//       galleryItems: initialImages,
//     })
//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// };

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

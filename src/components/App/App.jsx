import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
import { LoaderButton } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";

export class App extends Component {
state = {
  galleryItems: [],
};

render() {
  const { galleryItems } = this.state;

return (
  <>
  <Searchbar/>
  <ImageGallery/>
  <Loader/>
  <LoaderButton/>
  </>
)
};
};

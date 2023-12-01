import { Component } from 'react';
import { GalleryItem, GalleryImg, ImageModal } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '50px',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { img, imgWeb, name } = this.props;
    const { isModalOpen } = this.state;

    return (
      <GalleryItem onClick={this.openModal}>
        <GalleryImg src={imgWeb} alt={name} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <ImageModal
            src={img}
            alt={name}
            onClick={this.closeModal}
          ></ImageModal>
        </Modal>
      </GalleryItem>
    );
  }
}

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ items, selectedimage }) => {
  return (
    <GalleryList>
      {items.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          img={largeImageURL}
          imgWeb={webformatURL}
          name={tags}
          isOpen={selectedimage}
        />
      ))}
    </GalleryList>
  );
};

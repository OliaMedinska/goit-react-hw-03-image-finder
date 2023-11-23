import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = (items) => {
return (
    <ul class="gallery">
        
    {items.map(() => (
        <ImageGalleryItem/>
    ))
    },
    </ul>)
};
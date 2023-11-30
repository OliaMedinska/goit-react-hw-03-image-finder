import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({items}) => {
return (
    <GalleryList>
        
    {items.map((item) => (
        <ImageGalleryItem key={item.id} {...item}/>
    ))
    },
    </GalleryList>)
};
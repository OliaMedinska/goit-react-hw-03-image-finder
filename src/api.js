import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = `34510815-700dd665fa248476b1f313f8a`;

export const fetchImages = async (namePhoto, page = 1, perPage = 40) => {
    const response = await axios.get(BASE_URL, {
      params: {
        key: KEY,
        q: namePhoto,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: perPage,
        page: page
      }
    });
    return response.data.hits;
  }
  
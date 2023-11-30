import styled from "styled-components";

export const GalleryItem = styled.li`
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImg = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
      }
`;

export const GalleryModal = styled.div`
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      background-color: #fff;
      top: '50%';
      left: '50%';
`;
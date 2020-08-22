import './ImageList.css'; 
import React from "react";
import ImageCard  from './ImageCard';

const ImageList = (props) => {
  // const images = props.images.map(({ description, id, urls }) => { //image is destructured into its proprties
   const images = props.images.map((image) => { 
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

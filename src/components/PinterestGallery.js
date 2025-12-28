// PinterestGallery.js
import React, { useState, useEffect } from 'react';
import '../styles/PinterestGallery.css';

function Gallery({ folderPath }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Import all images from the specified folder
    // Using webpack's require.context to dynamically import images
    const importAll = (r) => {
      return r.keys().map(r);
    };

    try {
      // This will import all images from your specified folder
      // Adjust the path based on your folder structure
      const imageContext = require.context('../assets/gallery', false, /\.(png|jpe?g|svg|gif|webp)$/);
      const imageList = importAll(imageContext);
      setImages(imageList);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }, [folderPath]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pinterest-gallery-container">
      <div className="pinterest-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="pinterest-item"
            onClick={() => openModal(image)}
          >
            <img 
              src={image} 
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
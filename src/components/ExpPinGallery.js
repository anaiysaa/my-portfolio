import React, { useState } from 'react';
import '../styles/ExpPinGallery.css';

function Gallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images.length) return null;

  const count = images.length;
  const gridStyle = {
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: count === 1 ? '1fr' : count === 2 ? '1fr 1fr' : count === 3 ? '1fr 1fr 1fr' : 'repeat(2, 1fr)',
  };

  return (
    <div className="pinterest-gallery-container">
      <div style={gridStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="pinterest-item"
            onClick={() => setSelectedImage(image)}
            style={{ aspectRatio: count === 1 ? 'auto' : '1 / 1', overflow: 'hidden' }}
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
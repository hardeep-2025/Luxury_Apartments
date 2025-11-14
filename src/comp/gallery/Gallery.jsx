   import React from 'react';
import './Gallery.css';
import img1 from './imhGallery/3d-rendering-modern-dining-room-living-room-with-luxury-decor (1) 1.png'
import img2 from './imhGallery/vecteezy_3d-illustration-of-black-modern-kitchen-in-a-house-with-a_23122866 (2) 1.png'
import img3 from './imhGallery/vecteezy_3d-render-of-modern-kitchen-with-black-and-white-walls_23005495 1.png'
import img4 from './imhGallery/vecteezy_ai-generated-bedroom-for-interior-design-with-beautiful_37321031 1.png'
import img5 from './imhGallery/vecteezy_modern-living-room-illustration_22336948 1.png'
import img6 from './imhGallery/vecteezy_modern-living-room-illustration_22337131 1.png'
import img7 from './imhGallery/vecteezy_modern-living-room-illustration_22385926 1.png'
import img8 from './imhGallery/vecteezy_scandinavian-classic-white-kitchen-with-wooden-details_21994269 1.png'
import img9 from './imhGallery/vecteezy_luxury-bedroom-with-modern-design-and-comfortable-bedding_32942505 1 (2).png'

const images = [
        img8,
          img3,
          img4,
            img5,
              img7,
                img2,
               img9,
              img1,
            img6,
];

function Gallery() {
  return (
    <section className="gallerySection">
      <h2 className="galleryTitle">Our Gallery</h2>
      <div className="galleryGrid">
        {images.map((src, idx) => (
          <div key={idx} className="galleryItem">
            <img src={src} alt={`Gallery image ${idx+1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

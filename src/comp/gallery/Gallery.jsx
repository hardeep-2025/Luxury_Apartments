   import React, { useState } from 'react';
import './Gallery.css';
import img1 from './imhGallery/3d-rendering-modern-dining-room-living-room-with-luxury-decor (1) 1.png'
import img2 from './imhGallery/b3a35e8dc7bd5222860d2ff0824ea4dab5c062b3.jpg'
import img3 from './imhGallery/5983638b9afa8a9f4b2ab9aaa5a3142a231f68da.jpg'
import img4 from './imhGallery/vecteezy_luxury-bedroom-with-modern-design-and-comfortable-bedding_32942505 1 (2).png'
import img5 from './imhGallery/vecteezy_modern-living-room-illustration_22336948 1.png'
import img6 from './imhGallery/vecteezy_modern-living-room-illustration_22337131 1.png'
import img7 from './imhGallery/vecteezy_modern-living-room-illustration_22385926 1.png'
import img8 from './imhGallery/vecteezy_scandinavian-classic-white-kitchen-with-wooden-details_21994269 1.png'
import img9 from './imhGallery/vecteezy_modern-living-room-illustration_22336948 1.png'
import "react-photo-album/rows.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Col, Container, Row } from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import "yet-another-react-lightbox/plugins/counter.css";
import ImageListItem from '@mui/material/ImageListItem'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {  Fullscreen, Slideshow, Zoom } from 'yet-another-react-lightbox/plugins';
import { Element } from 'react-scroll';





function Gallery() {
   
  let Photos = [
  
  
  {
            src: img8,
            rows: 1,
            cols: 1,
        },
        {
            src: img3,
            rows: 2,
            cols: 2,
        },
        {
            src: img4,
            rows: 3,
            cols: 2,
        },
        {
            src: img5,
        },
        {
            src: img2,
            rows: 3,
            cols: 2,
        },
        {
            src: img7,
            cols: 1,
        },
        {
            src: img9,
            rows: 2,
            cols: 2,
        },
        {
            src: img1,
        },
        {
            src: img6,
        }
    ]
      const [open, setOpen] = useState(-1);


  function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

  return (
    <div name="gallery" id='gallery'>

    <section className="gallerySection">
                   <h1 className='galleryTitle'>Gallery</h1>

      <div className='galleryContainer'>

            <Container>
        <Row>
          <Col>
          <div className='GalleryImageDiv'>
            <ImageList 
                 variant="quilted"
                 cols={5}
                 gap={8}
                rowHeight={160}
                className='gallery-images-list' >
                {Photos.map((item,i) => (
               <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`GalleryImageCointer  gallery-Img-single-${i} `}
                >
          <img
            {...srcset(item.src, 121, item.rows , item.cols)}
            alt={i}
            loading="lazy"
            className={` gallery-SengleImg `}
        onClick={() => {setOpen(i)}}
          />

              </ImageListItem>
            ))}
          </ImageList>
      <Lightbox
      index={open}
        slides={Photos}
            plugins={[Zoom,Fullscreen,Slideshow,Thumbnails]}
        styles={{slide: { marginTop: "20px" },  toolbar: {background: 'black', width: '100%'}, icon:{color: '#fff'} }}
        controller={{ closeOnBackdropClick: true }}
        open={open >= 0}
        close={() => {setOpen(-1)}}
        counter={{ container: { style: { top: 0, bottom: "unset" } } }}

      />
</div>
      </Col>
      </Row>
      </Container></div>
    </section>
    </div>
  );
}

export default Gallery;

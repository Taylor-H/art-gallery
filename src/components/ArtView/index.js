import React,{ useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { getArt } from '../../data/HarvardArt';
import { generateSlides } from './generateSlides';


const ArtView = (props) => {
  console.log(props);
  let { artId, galleryId } = useParams();
  const artObj = getArt(galleryId, artId);
  const images = artObj.images;
  console.log(images);
  const mainRef = useRef();
  const thumbsRef = useRef();


  return (
    <>
      <Splide
        ref={mainRef}
        // onPaginationMounted={(data) => {
        //   const listItems = data._Components.Pagination.items;
        //   listItems.map(
        //     (item) => (item.button.textContent = `${item.page + 1}`)
        //   );
        // }}
        options={{
          perPage: 1,
          type: 'slide',
          lazyLoad: false,
          start: 1,
          height: '100%',
          width: '60%',
          rewind: true,
          gap: '1rem',
          arrows: false,
          pagination: true,
          progressBar: true,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          autoplay: false,
          interval: 6000,
          trimSpace: true,
          resetProgress: true,
        }}>
        {generateSlides(images).map((slide, key) => {
          return (
            <SplideSlide key={slide.src}>
              <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
          );
        })}
      </Splide>
      {artObj.description && artObj.labeltext ? (
        <>
          <p className="art-info">{artObj.description}</p>
          <p className="art-info">{artObj.labeltext}</p>
        </>
      ) : artObj.description ? (
        <p className="art-info">{artObj.description}</p>
      ) : (
        <p className="art-info">{artObj.labeltext}</p>
      )}
    </>
  );
};

export default ArtView;
// Splide('.main-slider', {
//   type: 'loop',
//   rewind: true,
//   perPage: 1,
//   gap: '0px',
//   focus: true,
//   arrows: {
//     type: 'slider',
//     prev: '.prev',
//     next: '.next',
//   },
//   pagination: {
//     type: 'bullets',
//     el: '.pagination',
//     bulletClass: 'pagination-bullet',
//     activeClass: 'active',
//   },
// });
    //// import Modal from '@material-ui/core/Modal';
   // const [open, setOpen] = useState(false);
  // const [imageSrc, setImageSrc] = useState('');
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
   /* <button className="magnify" type="button"
              onClick={handleOpen}>
              🔍
            </button> */

   /* <Modal imageSrc={imageSrc} open={open} className="modal">{console.log(imageSrc)}
        <div className="inside">
          <img
            src={imageSrc}
            alt={'modal'}
          />
          <button type="button" onClick={handleClose}>
            ✖
          </button>
        </div>
      </Modal> */

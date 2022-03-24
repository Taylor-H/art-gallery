import React from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { getArt } from '../../data/HarvardArt';



const ArtView = () => {
  let { artId, galleryId } = useParams();
  const artObj = getArt(galleryId, artId);
  const images = artObj.images;

  return (
    <>
      <Splide
        onPaginationMounted={(data) => {
          const listItems = data._Components.Pagination.items;
          listItems.map(
            (item) => (item.button.textContent = `${item.page + 1}`)
          );
        }}
        options={{
          perPage: 1,
          type: 'slide',
          lazyLoad: 'nearby',
          height: '100%',
          rewind: true,
          gap: '1rem',
          arrows: false,
          pagination: true,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          autoplay: false,
          interval: 6000,
          trimSpace: true,
        }}>
        {images.map((slide, key) => {
          return (
            <SplideSlide key={`${key}`}>
              <img
                data-splide-lazy={`${slide.baseimageurl}`} alt={slide.publiccaption}
              />
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

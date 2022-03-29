import React, { useRef, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { getGallery } from '../../data/HarvardArt';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import { getArt } from '../../data/HarvardArt';
// import { generateSlides } from '../ArtView/generateSlides';
// import { generateThumbs } from './generateThumbs';
import ArtView from '../ArtView';

const GalleryView = (props) => {
  let { galleryId, artId } = useParams();
  const gallery = getGallery(galleryId);
  const artObjects = gallery.objects;
  const mainRef = useRef();
  const thumbsRef = useRef();
  const sortedArtObjects = artObjects.sort(
    (obj1, obj2) => obj1.datebegin - obj2.datebegin
  );
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [mainRef, thumbsRef]);
  return (
    <div className="gallery">
      <h1>{gallery.name && ''}</h1>
      {gallery ? (
        <Splide
          ref={thumbsRef}
          options={{
            type: 'slide',
            direction: 'ttb',
            rewind: true,
            height: '80vh',
            width: '35%',
            pagination: false,
            cover: true,
            focus: 'center',
            isNavigation: true,
            resetProgress: true,
            start: 1,
            perPage: 8,
          }}
          className="gallery-preview">
          {sortedArtObjects.map((slide, key) => (
            // <div className="wrapper" key={key.toString()}>
            <SplideSlide key={`${slide.primaryimageurl}${key}`}>
              <Link to={`art/${slide.id}`} key={key}>
                <div className="gallery-preview">
                  <img src={slide.primaryimageurl} alt={slide.title} />
                </div>
                <div className="gallery-info">
                  <h3>
                    {slide.title.length <= 68
                      ? slide.title
                      : slide.title.slice(0, 68) + '...'}
                  </h3>
                  <p>
                    {' '}
                    <b> Dated:</b>&nbsp;{slide.dated}
                  </p>
                  <p>
                    {' '}
                    <b>Period:</b>&nbsp;{slide.period}
                  </p>
                  <p>
                    {' '}
                    <b>medium:</b>&nbsp;{slide.medium}
                  </p>
                </div>
              </Link>
            </SplideSlide>

            // </div>
          ))}
        </Splide>
      ) : null}
      <div className="art">
        {!artId ? (
          <>
            <img
            src={`${artObjects[0].primaryimageurl}?height=1000&width=1000`}
              alt={artObjects[0].title}
            />
            <div className="art-info">{gallery.labeltext}</div>
          </>
        ) : (
          <ArtView gallery={gallery} mainRef={mainRef} thumbsRef={thumbsRef} />
        )}
      </div>
    </div>
  );
};
export default GalleryView;

import {  useOutletContext, useParams, Link } from 'react-router-dom';
import React from 'react';
import { getGallery} from '../../data/HarvardArt';
import ArtView from '../ArtView';


const GalleryView = (props) => {
  const {galleries} = useOutletContext();
  let { galleryId, artId } = useParams();
  const gallery = getGallery(galleryId);
  const artObjects = gallery.objects;

  const sortedArtObjects = artObjects.sort(
    (obj1, obj2) => obj1.datebegin - obj2.datebegin
    );

  return (
    <>
      <div className="gallery">
        <h1>{gallery.name}</h1>
        {gallery
          ? sortedArtObjects.map((art) => (
              <Link to={`art/${art.id}`} key={art.id}>
                <div className="galleryPreview">
                  <img src={art.primaryimageurl} alt={art.title} />
                </div>
                <div className="gallery-info">
                  <h3>
                    {art.title.length <= 68
                      ? art.title
                      : art.title.slice(0, 68) + '...'}
                  </h3>
                  <p>
                    {' '}
                    <b> Dated:</b>&nbsp;{art.dated}
                  </p>
                  <p>
                    {' '}
                    <b>Period:</b>&nbsp;{art.period}
                  </p>
                  <p>
                    {' '}
                    <b>medium:</b>&nbsp;{art.medium}
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
      <div className="art">
        {!artId ? (
          <><img src={gallery.objects[0].primaryimageurl} alt="" />
            <div className="art-info">{gallery.labeltext}</div>
          </>
        ) : (
          <ArtView />
        )}
      </div>
    </>
  );
};
export default GalleryView;

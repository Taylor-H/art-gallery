import {  useOutletContext, useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getGallery} from '../../data/HarvardArt';
import ArtView from '../ArtView';
import { StyledPaginate } from '../Styled';




const GalleryView = (props) => {
  const {galleries} = useOutletContext();
  let { galleryId, artId } = useParams();
  const gallery = getGallery(galleryId);
  const artObjects = gallery.objects;

  const sortedArtObjects = artObjects.sort(
    (obj1, obj2) => obj1.datebegin - obj2.datebegin
    );
    // const [offset, setOffset] = useState(0);
    // const [data, setData] = useState([]);
    // const [perPage] = useState(1);
    // const [pageCount, setPageCount] = useState(0);
//     useEffect(() => {
//       const getData = () => {
//         const slice = galleries.slice(offset, offset + perPage);
//         console.log('galleryslice: ', slice, 'offset: ', offset, 'perPage: ', perPage);

//         const galleryData = galleries.map((gal) => {
//          const galPrevImg = gal.objects[0].primaryimageurl;
//           return (
//             <div key={`${gal['gallerynumber']}`} className="art-image">
//               <img
//                 src={`${galPrevImg}`}
//                 alt={''}
//               />
//             </div>
//           );});
//     setData(galleryData);
//     console.log('pageCountGallery', Math.ceil(galleryData.length / perPage));
//     setPageCount(Math.ceil(galleryData.length / perPage));
//   };

//   getData();
// }, [galleries, offset, setData, galleryId, perPage, setPageCount]);

//   const handlePageClick = (e) => {
//   const selectedPage = e.selected;
//   console.log("selectedPage", selectedPage);
// setOffset(0);
// };
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
            {/* {data}
            <StyledPaginate
              itemsPerPage={1}
              previousLabel={'< prev'}
              nextLabel={'next>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              forcePage={-1}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            /> */}
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

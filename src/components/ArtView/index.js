import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import { generateSlides } from '../../utils';
// import ReactPaginate from 'react-paginate';
// import { StyledPaginate } from '../Styled';
import { getArt } from '../../data/HarvardArt';

const ArtView = () => {
let { artId, galleryId } = useParams();
  const artObj = getArt(galleryId, artId);
  const images = artObj.images;
// const [offset, setOffset] = useState(0);
// const [data, setData] = useState([]);
// const [perPage] = useState(1);
// const [pageCount, setPageCount] = useState(1);
// useEffect(() => {
//   const getData = () => {
//     const artObj = getArt(galleryId, artId);
//     const data = artObj.images;
//     const slice = data.slice(offset, offset + perPage);
//     console.log('slice: ', slice, 'offset: ', offset, 'perPage: ', perPage);
//     const postData = slice.map((image) => (
//       <div key={`${image.id}`} className={'art-image'}>
//         <img
//           src={image.baseimageurl}
//           width={image.width * 0.7}
//           height={image.height * 0.7}
//           alt={''}
//         />
//       </div>
//     ));

//     setData(postData);
//     console.log('pageCount', Math.ceil(data.length / perPage));
//     setPageCount(Math.ceil(data.length / perPage));
//   };

//   getData();
// }, [offset, setData, artId, galleryId, perPage, setPageCount]);


// const handlePageClick = (e) => {
//   const selectedPage = e.selected;
//   console.log("selectedPage", selectedPage);
// setOffset(0);
// };
return (
  <>
  {images}
       <Splide
        options={ {
          perPage: 1,
          height : '50rem',
          rewind : true,
          gap    : '1rem',
        } }
        onMoved={ ( splide, newIndex ) => {
          // eslint-disable-next-line
          console.log( 'moved', newIndex );

          // eslint-disable-next-line
          console.log( 'length', splide.length );
        } }
      >
        { images.map( slide => (
          <SplideSlide key={ slide.src }>
            <img src={ slide.src } alt={ slide.alt }/>
          </SplideSlide>
        ) ) }
      </Splide>
    {/* {data}
    <ReactPaginate
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
   {/* <StyledPaginate itemsPerPage={1} /> */}
    <div className="art-info">
      {artObj.description && artObj.labeltext ? (
        <>
          <p className="">{artObj.description}</p>
          <p className="">{artObj.labeltext}</p>
        </>
      ) : artObj.description ? (
        artObj.description
      ) : (
        artObj.labeltext
      )}
    </div>
  </>
);
};

export default ArtView;

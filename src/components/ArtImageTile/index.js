import React from 'react'
// import { Link } from 'react-router-dom';
// import { Routes, Route, useParams } from 'react-router-dom'

const ArtImageTile = (props) => {
  console.log('art props', props);
let {images}  = props.art
  const image = images[0]
  // let { artId } = useParams();
  const artId  = image.imageid;
  // /galleries/:${galleryId}/
  return(
<div key={artId}>
  {/* <Link to={`art/:${artId}`}>
    <img src={image.baseimageurl} alt={image.alttext} width="10%"/>
    </Link> */}
{/* <Outlet /> */}
</div>
)
  }


export default ArtImageTile;

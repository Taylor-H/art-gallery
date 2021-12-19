import React from 'react'
import { Link } from 'react-router-dom';
import { Routes, Route, useParams } from 'react-router-dom'

const ArtImageTile = (props) => {
let {images}  = props.art
  const image = images[0]
  let { galleryId } = useParams();
  const artId  = image.imageid;
  console.log('image', image);

  return(
<div key={artId}>
  <Link to={`/galleries/:${galleryId}/art/:${artId}`}>
    <img src={image.baseimageurl} alt={image.alttext} width="10%"/>
    </Link>
    <Routes>
      <Route exact path="/galleries/:galleryId/art/:artId" element={<ArtImageTile art={props.art} />} />
      <Route path="*" render={() => <h2>404</h2>} />
    </Routes>
</div>
)
  }


export default ArtImageTile;

import React from 'react'
import { useParams } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile'


const GalleryView = (props) => {
  let { galleryId } = useParams()

  const gallery  = props.galleries.find(
    ({gallerynumber}) => gallerynumber === galleryId)

  console.log('props', props);
  // const { classification } = gallery.classification


return(
  <>
<h1>{(gallery)? gallery.theme: gallery.name}</h1>
{gallery? gallery.objects.map((art) => <ArtImageTile art={art} />) : null}
</>
)
}

export default GalleryView;


// gallery.objects.map(art => <ArtImageTile art={art} />)

import React from 'react'
import { useParams } from 'react-router-dom'

const GalleryView = (props) => {
  console.log(props)
  let { galleryId } = useParams()

  const gallery = props.galleries.find(({gallerynumber}) => gallerynumber === galleryId)
  console.log(gallery)
  return (<h1>{gallery.name}</h1>)
}

export default GalleryView;

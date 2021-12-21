import React from 'react';
import harvardArt from '../../data/HarvardArt';
import GalleryNavigation from '../GalleryNavigation';
const Home = () => {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <h2>Harvard Art Museum</h2>
      <p>
        An abbreviated look at the galleries of the museum at Harvard
        University.
      </p>
    </div>
  );
};

export default Home;

// const { galleryId } = useParams();

// const gallery = galleries.find(gallery => gallery.id === galleryId);

// const artworksInGallery = artworks.filter(artwork => artwork.galleryId === galleryId);
// const artworksInGalleryCount = artworksInGallery.length;
// const artworksInGalleryCountText = artworksInGalleryCount === 1 ? 'artwork' : 'artworks';
// const artworksInGalleryCountTextPlural = artworksInGalleryCount === 1 ? 'artwork' : 'artworks';
// const artworksInGalleryCountTextSingular = artworksInGalleryCount === 1 ? 'artwork' : 'artworks';

// return (
//   <div className="page-wrapper">
//     <h1>{gallery.title}</h1>
//     <p>{artworksInGalleryCount} {artworksInGalleryCountText} in this gallery</p>
//     <div className="gallery-view">
//       {artworksInGallery.map(artwork => <ArtImageTile key={artwork.id} artwork={artwork} />)}
//     </div>
//   </div>
// );

import { Routes, Route, useParams, Outlet, Link } from 'react-router-dom';
import React from 'react';
import harvardArt from './data/HarvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import FourOFour from './components/GalleryNavigation/FourOFour'


const galleries = harvardArt.records;
const getGallery = (galleryId) => {
  return harvardArt.records.find(({ gallerynumber }) => gallerynumber === galleryId);
}

const getArt = (galleryId, artId) => {
  const artObjects = getGallery(galleryId).objects;
  const object = artObjects.find((object) => object.id.toString() === artId);
  return object
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="galleries/:galleryId" element={<GalleryView />} >
        <Route path="art/:artId" element={<ArtView />} />
      </Route>
      </Route>
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}
function Layout() {
  return (
    <div className="main">
      <GalleryNavigation galleries={galleries} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
function Home() {
  return (
    <>
      <h2>Harvard Art Museum</h2>
      <p>
        An abbreviated look at the galleries of the museum at Harvard
        University.
      </p>
    </>
  );
}
function GalleryView() {
  let { galleryId } = useParams();
  const gallery = galleries.find(
    ({ gallerynumber }) => gallerynumber === galleryId);
  const artObjects = gallery.objects;
  return (
    <>
    <div className="gallery">
      <h1>{gallery.name}</h1>
      {gallery
        ? artObjects.map((art) => (
            <Link to={`art/${art.id}`} key={art.id}>
              <div className="galleryPreview">
                <img src={art.images[0].baseimageurl} alt={art.title} />
                {art.title}
              </div>
            </Link>
          ))
        : null}
    </div>
              <div className="art">
        <Outlet />
      </div>
      </>
  );
}
function ArtView() {
  let {artId, galleryId}= useParams();
  const artObj = getArt(galleryId, artId);
  return <div className="art">
  {artObj.images.map((image) => <div className="art-images" key={image.imageid}><img src={image.baseimageurl} alt={image.medium} /></div> )}
   </div>
}
export default App;

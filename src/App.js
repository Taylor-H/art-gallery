import React from 'react';
import harvardArt from './data/HarvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
// import ArtImageTile from './components/ArtImageTile'
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
console.log('harvardArt', harvardArt);
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
        <Routes>
        <Route exact path="/" render={()=> <div>Harvard Art Museum</div>} />
        <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records} />} />
        <Route path="*" render={() => <h2>404</h2>} />
        </Routes>
    </div>
  );
}

export default App;

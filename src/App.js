import React from 'react';
import harvardArt from './data/HarvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtImageTile from './components/ArtImageTile'
import FourOFour from './components/GalleryNavigation/FourOFour'
import Home from './components/GalleryNavigation/Home';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
console.log('harvardArt', harvardArt);
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
        <Routes>
        <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records} />} />
        <Route path="/*" element={<FourOFour />} />
        <Route exact path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;

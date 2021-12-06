import React from 'react';
import harvardArt from './data/HarvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

import { Route, Routes } from 'react-router-dom';

// const { galleries } = harvardArt.records

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />


        <Routes>
        <Route exact path="/" render={() => <h2>Harvard Art Museum</h2>} />
        <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records} />} />
        </Routes>

    </div>
  );
}

export default App;

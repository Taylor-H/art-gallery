import { Routes, Route, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import harvardArt from './data/HarvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import ArtView from './components/ArtView';
import FourOFour from './components/FourOFour';
import GalleryView from './components/GalleryView';
const galleries = harvardArt.records;


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="galleries/:galleryId" element={<GalleryView />}>
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
        <Outlet context={{galleries}}/>
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


export default App;

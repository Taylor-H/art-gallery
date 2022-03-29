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

        <Outlet context={{galleries}}/>

    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <h2>Art Museum</h2>
      <p className="home">
        An abbreviated look at the galleries at Harvard Art Museum. The Harvard
        Art Museum offers a REST-style service for developers to use. See
        <a href="https://api.harvardartmuseums.org" alt="Harvard Art Museum">
          {' '}
          https://api.harvardartmuseums.org
        </a>{' '}
        for more info.
        <br />
      </p>
      <p className="home">
        The API gives direct access to their massive collection of data. Very
        useful for web developers building a multi level slide app. I built this
        using React and React Router for front end routing. I used a slide
        library called Splide for the gallery. I mapped over all the galleries
        in my sample to form the top navigation sorted by period. <br />
      </p>
      <p className="home">
        Choosing a gallery will show all the items in that gallery as small cards going down the side. Clicking on
        an item wil get a gallery with all the images associated with that item.
        Filtering through three levels to get to the more detailed images..
      </p>
    </div>
  );
}


export default App;

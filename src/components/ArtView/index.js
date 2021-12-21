import React from 'react'
import { Routes, Route, useParams, Outlet } from 'react-router-dom'
import harvardArt from '../../data/HarvardArt';
import FourOFour from '../GalleryNavigation/FourOFour'
const galleries = harvardArt.records;

function ArtView() {
  let params = useParams();
  console.log('artId', params.artId);
  // const art  = props.objects.find(({id}) => id === artId)
  // console.log('art', art);
  return <><h1>ArtView</h1>      <div className="content">
  <Outlet />
</div></>
}

function App(props) {
  let { artId, galleryId } = useParams();
  console.log('props', props, galleryId);
  return (
    <Routes>
      <Route path="art" element={<FourOFour />} />
      <Route path=":artId" element={<ArtView />} />
    </Routes>
  );
}
export default App;


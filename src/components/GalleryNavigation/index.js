import { NavLink } from 'react-router-dom';
import './styles.css';
const GalleryNavigation = (props) => {
  const galleries = props.galleries;





  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      {galleries.map((gallery) => {
        return (
          <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
            {(gallery.theme)? gallery.theme: gallery.name}<img src={gallery.objects[0].primaryimageurl} alt={gallery.name} width="20px"/>
          </NavLink>
        );
      })}
    </nav>
  );
};
export default GalleryNavigation;

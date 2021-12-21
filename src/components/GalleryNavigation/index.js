import { Link } from 'react-router-dom';
import './styles.css';

const GalleryNavigation = (props) => {
  const galleries = props.galleries;
  // console.log('galleries from GalleryNav', galleries);
  return (
    <nav>
    <Link to="/">Home</Link>
    {galleries.map((gallery) => {
      const preImg = gallery.objects[0].primaryimageurl;
      return (
        <Link to={`galleries/${gallery.id}`} key={gallery.id}><img src={preImg} alt={gallery.theme} width="20px"/>{gallery.name}</Link>
        )
    }
    )}

  </nav>
  )
};
export default GalleryNavigation;
    // <nav>
    //   <NavLink to="/">Home</NavLink>
    //   {galleries.map((gallery) => {
    //     console.log('gallery0', gallery.objects.length);
    //     return (
    //       <NavLink to={`galleries/${gallery.id}`} key={gallery.id}>
    //       <div>
    //         {(gallery.name)? gallery.name: null}<img src={gallery.objects[0].baseimageurl | null} alt={gallery.theme} width="20px"/>
    //         </div>
    //       </NavLink>
    //   )}
    //   )}
    // </nav>

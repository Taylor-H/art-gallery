import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../Styled';
const GalleryNavigation = (props) => {
  const galleries = props.galleries;

  const buddist = galleries.filter((gallery) => gallery.name === 'Buddhist Sculpture');
 const early = galleries.filter(gallery => gallery.name === "Early Chinese Art")
 const islamic = galleries.filter(gallery => gallery.name === "Art from Islamic Lands")
  const mediterranean = galleries.filter(
    (gallery) => gallery.name === 'Ancient Mediterranean and Near Eastern Art'
  );
  const special = galleries.filter(gallery => gallery.name === "Special Exhibitions Gallery")
  const categories = [buddist, early, islamic, mediterranean, special];

  return (
    <>
      <nav>
        {categories.map((category, key) => (
          <div key={key} className="nav-item">

            {category.map((gallery) => {

              const preImg = gallery.objects[0].primaryimageurl;
              return (
                <Link
                  className="img-link"
                  key={gallery['gallerynumber']}
                  to={`galleries/${gallery.id}`}>
                  {category.length < 2 ? (
                    <div
                      className="backgroundImg-small"
                      style={{ backgroundImage: `url(${preImg})` }}></div>
                  ) : (
                    <div
                      className="backgroundImg"
                      style={{ backgroundImage: `url(${preImg})` }}></div>
                  )}
                </Link>
              );
            })}
            <div className="name">{category[0].name}</div>
          </div>
        ))}
      </nav>
      <div className="home-button">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
    </>
  );
};
export default GalleryNavigation;

  return( <>
      <div className="gallery">
        <h1>{gallery.name}</h1>
        {gallery
          ? sortedArtObjects.map((art, key) => (
              <Link to={`art/${art.id}`} key={key}>
                <div className="galleryPreview">
                  <img src={art.primaryimageurl} alt={art.title} />
                </div>
                <div className="gallery-info">
                  <h3>
                    {art.title.length <= 68
                      ? art.title
                      : art.title.slice(0, 68) + '...'}
                  </h3>
                  <p>
                    {' '}
                    <b> Dated:</b>&nbsp;{art.dated}
                  </p>
                  <p>
                    {' '}
                    <b>Period:</b>&nbsp;{art.period}
                  </p>
                  <p>
                    {' '}
                    <b>medium:</b>&nbsp;{art.medium}
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
      <div className="art">
        {!artId ? (
          <>
            <img
              src={gallery.objects[0].primaryimageurl}
              alt={gallery.objects[0].title}
            />
            <div className="art-info">{gallery.labeltext}</div>
          </>
        ) : (
          <ArtView gallery={gallery} />
        )}
      </div>
    </>
  );
};
export default GalleryView;

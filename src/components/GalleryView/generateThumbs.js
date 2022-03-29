export const generateThumbs = (arr) =>
  arr.map((value, index) => {
    return {
      src: `${value.primaryimageurl}`,
      alt: `Image ${index}`,
    };
  });

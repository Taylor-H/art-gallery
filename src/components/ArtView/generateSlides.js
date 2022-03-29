/**
 * Return an array with objects containing data of sample images.
 *
 *
 * return An array with objects for sample images.
 */
export const generateSlides = (arr) => arr.map((value, index) => {
    return {
      src: `${value.baseimageurl}?height=1000&width=1000`,
      alt: `Image ${index}`,
    };
  });


export const getAvgRating = (testimonials) => {
  let sum = 0;

  testimonials.forEach((t) => {
    sum += t.rating;
  });

  let result = sum / testimonials.length;

  if (!result) {
    return 0;
  }

  return result;
};

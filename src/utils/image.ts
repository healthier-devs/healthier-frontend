export const preloadImage = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();

    img.src = "images/" + url;
  });
};

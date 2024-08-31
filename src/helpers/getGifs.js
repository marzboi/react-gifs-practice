export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Btb6zw6YdFoq8Q2h9YJ9aeLrQtOtUXkL&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

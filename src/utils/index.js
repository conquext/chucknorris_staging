export const paginate = (items = [], pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const item = items.slice(startIndex, endIndex);
  return item;
};

export const range = (start = 0, end = 2) =>
  [...Array(end - start)].map((_, i) => i + start);

export const importAll = (r) => {
  let images = {};
  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
  return images;
};

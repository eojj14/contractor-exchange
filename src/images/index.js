import contractors from './contractors.jpg';

let imageList = {
  contractors,
};

function getImage(key) {
  return imageList[key];
}

export { getImage };
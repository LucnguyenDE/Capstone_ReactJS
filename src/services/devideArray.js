export const devideArray = (array) => {
  let array_after_devide = [];
  let length = array.length;
  let numberOfColumns = length / 10;
  for (let i = 0; i < length; i += numberOfColumns) {
    let item = [];
    for (let j = i; j < i + numberOfColumns; j++) {
      item.push(array[j]);
    }
    array_after_devide.push(item);
  }
  return array_after_devide;
};

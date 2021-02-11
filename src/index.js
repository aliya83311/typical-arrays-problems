exports.min = function min(array) {
    if (array == false || array == undefined) {
        return 0;
    }
    let sortedArr = array.sort((x, y) => x - y);
    return sortedArr[0];
};

exports.max = function max(array) {
    if (array == false || array == undefined) {
        return 0;
    }
    let sortedArr = array.sort((x, y) => x - y);
    return sortedArr[sortedArr.length - 1];
};

exports.avg = function avg(array) {
  if (array == false || array == undefined) {
    return 0;
  }
  let counter = 0;
  let newArray = array.map((value) => counter += value);
  return counter / array.length;
};
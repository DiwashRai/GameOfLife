export const create2DArray = (x: number, y: number) => {
  const arr: boolean[][] = new Array(x);
  for (let i = 0; i < x; i++) {
    arr[i] = new Array(y);
    for (let j = 0; j < y; j++) {
      arr[i][j] = false;
    }
  }
  return arr;
};

export const resize2DArray = (
  x: number,
  y: number,
  initialArr: boolean[][]
) => {
  const newArr = create2DArray(x, y);
  const shorterX = x < initialArr.length ? x : initialArr.length;
  const shorterY = y < initialArr[0].length ? y : initialArr[0].length;
  for (let i = 0; i < shorterX; ++i) {
    for (let j = 0; j < shorterY; ++j) {
      newArr[i][j] = initialArr[i][j];
    }
  }
  return newArr;
};

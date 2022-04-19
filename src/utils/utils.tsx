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

import { create2DArray } from './utils';

// oscillators
export const blinker = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][1] = true;
  boardArray[2][2] = true;
  boardArray[2][3] = true;
  return boardArray;
};

export const toad = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][2] = true;
  boardArray[3][2] = true;
  boardArray[4][2] = true;

  boardArray[1][3] = true;
  boardArray[2][3] = true;
  boardArray[3][3] = true;
  return boardArray;
};

export const beacon = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[1][1] = true;
  boardArray[2][1] = true;
  boardArray[1][2] = true;

  boardArray[4][3] = true;
  boardArray[3][4] = true;
  boardArray[4][4] = true;
  return boardArray;
};

export const pulsar = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  // horizontal lines
  boardArray[4][2] = true;
  boardArray[5][2] = true;
  boardArray[6][2] = true;

  boardArray[10][2] = true;
  boardArray[11][2] = true;
  boardArray[12][2] = true;

  boardArray[4][7] = true;
  boardArray[5][7] = true;
  boardArray[6][7] = true;

  boardArray[10][7] = true;
  boardArray[11][7] = true;
  boardArray[12][7] = true;

  boardArray[4][9] = true;
  boardArray[5][9] = true;
  boardArray[6][9] = true;

  boardArray[10][9] = true;
  boardArray[11][9] = true;
  boardArray[12][9] = true;

  boardArray[4][14] = true;
  boardArray[5][14] = true;
  boardArray[6][14] = true;

  boardArray[10][14] = true;
  boardArray[11][14] = true;
  boardArray[12][14] = true;

  // vertical lines
  boardArray[2][4] = true;
  boardArray[2][5] = true;
  boardArray[2][6] = true;

  boardArray[2][10] = true;
  boardArray[2][11] = true;
  boardArray[2][12] = true;

  boardArray[7][4] = true;
  boardArray[7][5] = true;
  boardArray[7][6] = true;

  boardArray[7][10] = true;
  boardArray[7][11] = true;
  boardArray[7][12] = true;

  boardArray[9][4] = true;
  boardArray[9][5] = true;
  boardArray[9][6] = true;

  boardArray[9][10] = true;
  boardArray[9][11] = true;
  boardArray[9][12] = true;

  boardArray[14][4] = true;
  boardArray[14][5] = true;
  boardArray[14][6] = true;

  boardArray[14][10] = true;
  boardArray[14][11] = true;
  boardArray[14][12] = true;
  return boardArray;
};

export const pentaDecathlon = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[5][4] = true;
  boardArray[5][5] = true;
  boardArray[4][6] = true;
  boardArray[6][6] = true;
  boardArray[5][7] = true;
  boardArray[5][8] = true;
  boardArray[5][9] = true;
  boardArray[5][10] = true;
  boardArray[4][11] = true;
  boardArray[6][11] = true;
  boardArray[5][12] = true;
  boardArray[5][13] = true;
  return boardArray;
};

// spaceships
export const glider = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][1] = true;
  boardArray[3][2] = true;
  boardArray[1][3] = true;
  boardArray[2][3] = true;
  boardArray[3][3] = true;
  return boardArray;
};

export const lightWeightSS = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][1] = true;
  boardArray[5][1] = true;
  boardArray[2][3] = true;

  boardArray[6][2] = true;
  boardArray[6][3] = true;
  boardArray[3][4] = true;
  boardArray[4][4] = true;
  boardArray[5][4] = true;
  boardArray[6][4] = true;
  return boardArray;
};

export const middleWeightSS = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[4][1] = true;
  boardArray[2][2] = true;
  boardArray[6][2] = true;
  boardArray[2][4] = true;

  boardArray[7][3] = true;
  boardArray[7][4] = true;
  boardArray[3][5] = true;
  boardArray[4][5] = true;
  boardArray[5][5] = true;
  boardArray[6][5] = true;
  boardArray[7][5] = true;
  return boardArray;
};

export const heavyWeightSS = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[4][1] = true;
  boardArray[5][1] = true;
  boardArray[2][2] = true;
  boardArray[7][2] = true;
  boardArray[2][4] = true;

  boardArray[8][3] = true;
  boardArray[8][4] = true;
  boardArray[3][5] = true;
  boardArray[4][5] = true;
  boardArray[5][5] = true;
  boardArray[6][5] = true;
  boardArray[7][5] = true;
  boardArray[8][5] = true;
  return boardArray;
};

// methuselahs
export const rPentomino = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][1] = true;
  boardArray[3][1] = true;
  boardArray[1][2] = true;
  boardArray[2][2] = true;
  boardArray[2][3] = true;
  return boardArray;
};

export const diehard = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[1][2] = true;
  boardArray[2][2] = true;
  boardArray[2][3] = true;

  boardArray[7][1] = true;

  boardArray[6][3] = true;
  boardArray[7][3] = true;
  boardArray[8][3] = true;
  return boardArray;
};

export const acorn = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[2][1] = true;
  boardArray[1][3] = true;
  boardArray[2][3] = true;

  boardArray[4][2] = true;

  boardArray[5][3] = true;
  boardArray[6][3] = true;
  boardArray[7][3] = true;
  return boardArray;
};

// guns
export const gosperGliderGun = (columns: number, rows: number) => {
  const boardArray = create2DArray(columns, rows);
  boardArray[1][5] = true;
  boardArray[2][5] = true;
  boardArray[1][6] = true;
  boardArray[2][6] = true;

  boardArray[11][5] = true;
  boardArray[11][6] = true;
  boardArray[11][7] = true;
  boardArray[12][4] = true;
  boardArray[12][8] = true;
  boardArray[13][3] = true;
  boardArray[14][3] = true;
  boardArray[13][9] = true;
  boardArray[14][9] = true;
  boardArray[15][6] = true;
  boardArray[16][4] = true;
  boardArray[16][8] = true;
  boardArray[17][5] = true;
  boardArray[17][6] = true;
  boardArray[17][7] = true;
  boardArray[18][6] = true;

  boardArray[21][3] = true;
  boardArray[21][4] = true;
  boardArray[21][5] = true;
  boardArray[22][3] = true;
  boardArray[22][4] = true;
  boardArray[22][5] = true;
  boardArray[23][2] = true;
  boardArray[23][6] = true;
  boardArray[25][1] = true;
  boardArray[25][2] = true;
  boardArray[25][6] = true;
  boardArray[25][7] = true;

  boardArray[35][3] = true;
  boardArray[35][4] = true;
  boardArray[36][3] = true;
  boardArray[36][4] = true;

  return boardArray;
};

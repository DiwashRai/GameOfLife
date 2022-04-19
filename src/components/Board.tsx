import { useEffect, useState, useRef, memo } from 'react';
import { Box, Button } from '@chakra-ui/react';

interface BoardProps {
  tileLength: number;
  boardArray: any;
}

const Board = memo(({ tileLength, boardArray }: BoardProps) => {
  const [run, setRun] = useState<boolean>(false);

  const canvas = useRef<HTMLCanvasElement>(null);

  const columns = boardArray.length;
  const rows = boardArray[0].length;
  const canvasWidth = columns * tileLength;
  const canvasHeight = rows * tileLength;

  const drawGridLines = (
    context: CanvasRenderingContext2D,
    columns: number,
    rows: number
  ) => {
    context.beginPath();
    for (let i = 0; i < columns; ++i) {
      context.moveTo(i * tileLength, 0);
      context.lineTo(i * tileLength, canvasHeight);
    }

    for (let i = 0; i < rows; ++i) {
      context.moveTo(0, i * tileLength);
      context.lineTo(canvasWidth, i * tileLength);
    }
    context.stroke();
  };

  const fillGrid = (context: CanvasRenderingContext2D, boardArray: any) => {
    for (let i = 0; i < columns; ++i) {
      for (let j = 0; j < rows; ++j) {
        if (boardArray[i][j]) context.fillStyle = 'white';
        else context.fillStyle = 'black';

        context.fillRect(
          i * tileLength,
          j * tileLength,
          tileLength,
          tileLength
        );
      }
    }
  };

  const applyRules = (boardArray: any) => {
    const newBoard = Array.from(Array(columns), () => new Array(rows));

    for (let i = 0; i < columns; ++i) {
      for (let j = 0; j < rows; ++j) {
        let neighbours = 0;
        if (j > 0 && boardArray[i][j - 1]) ++neighbours;
        if (i < columns - 1 && j > 0 && boardArray[i + 1][j - 1]) ++neighbours;
        if (i < columns - 1 && boardArray[i + 1][j]) ++neighbours;
        if (i < columns - 1 && j < rows - 1 && boardArray[i + 1][j + 1])
          ++neighbours;
        if (j < rows - 1 && boardArray[i][j + 1]) ++neighbours;
        if (i > 0 && j < rows - 1 && boardArray[i - 1][j + 1]) ++neighbours;
        if (i > 0 && boardArray[i - 1][j]) ++neighbours;
        if (i > 0 && j > 0 && boardArray[i - 1][j - 1]) ++neighbours;

        if (
          (boardArray[i][j] && (neighbours == 2 || neighbours == 3)) ||
          (!boardArray[i][j] && neighbours == 3)
        )
          newBoard[i][j] = true;
        else newBoard[i][j] = false;
      }
    }
    return newBoard;
  };

  //TODO remove any
  const render = () => {
    console.log('rendering');
    if (!canvas.current) {
      console.log('error getting canvas.current');
      return;
    }
    const ctx = canvas.current.getContext('2d', { alpha: false });
    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      console.log('error getting canvas.current.context');
      return;
    }

    boardArray = applyRules(boardArray);
    fillGrid(ctx, boardArray);
    drawGridLines(ctx, boardArray.length, boardArray[0].length);
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (run) intervalId = setInterval(() => render(), 20);
    return () => clearInterval(intervalId);
  }, [run]);

  useEffect(() => {
    setRun(false);
    if (!canvas.current) {
      console.log('error getting canvas.current');
      return;
    }
    const ctx = canvas.current.getContext('2d', { alpha: false });
    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      console.log('error getting canvas.current.context');
      return;
    }
    ctx.strokeStyle = 'grey';
    fillGrid(ctx, boardArray);
    drawGridLines(ctx, columns, rows);
  }, [boardArray, tileLength]);

  return (
    <Box>
      <Button width="8rem" marginBottom="1rem" onClick={() => setRun(!run)}>
        {run ? 'Pause' : 'Play'}
      </Button>
      <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
    </Box>
  );
});

export default Board;

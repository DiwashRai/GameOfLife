import { useEffect, useState, useRef } from 'react';
import { Box, Button, Flex, Select } from '@chakra-ui/react';
import { create2DArray } from '../utils/utils';

interface BoardProps {
  boardArray: any;
  setBoardArray: (value: boolean[][]) => void;
  setDisableUI: (value: boolean) => void;
}

const Board = ({ boardArray, setBoardArray, setDisableUI }: BoardProps) => {
  const [run, setRun] = useState<boolean>(false);
  const [tileLength, setTileLength] = useState<number>(8);
  const [speed, setSpeed] = useState<number>(100);

  const canvas = useRef<HTMLCanvasElement>(null);

  let columns = boardArray.length;
  let rows = boardArray[0].length;
  let canvasWidth = columns * tileLength;
  let canvasHeight = rows * tileLength;

  const drawGridLines = (
    context: CanvasRenderingContext2D,
    columns: number,
    rows: number
  ) => {
    context.strokeStyle = 'grey';
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
    if (!canvas.current) {
      console.log('error getting canvas.current');
      return;
    }
    const ctx = canvas.current.getContext('2d', { alpha: false });
    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      console.log('error getting canvas.current.context');
      return;
    }

    fillGrid(ctx, boardArray);
    if (tileLength >= 8)
      drawGridLines(ctx, boardArray.length, boardArray[0].length);
  };

  const step = () => {
    boardArray = applyRules(boardArray);
    render();
  };

  useEffect(() => {
    setDisableUI(run);
    let intervalId: ReturnType<typeof setInterval>;
    if (run) {
      intervalId = setInterval(() => step(), speed);
      return () => {
        clearInterval(intervalId);
        setBoardArray(boardArray);
      };
    }
  }, [run]);

  useEffect(() => {
    if (!canvas.current) {
      console.log('error getting canvas.current');
      return;
    }
    const ctx = canvas.current.getContext('2d', { alpha: false });
    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      console.log('error getting canvas.current.context');
      return;
    }
    render();
  }, [boardArray, tileLength]);

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyItems="center"
        gap="1rem"
      >
        <Box height="20px" lineHeight="20px" whiteSpace="nowrap">
          Tile size:
        </Box>
        <Select
          value={tileLength}
          onChange={(e) => setTileLength(Number(e.target.value))}
          width="8rem"
          isDisabled={run}
        >
          <option value={4}>4px</option>
          <option value={6}>6px</option>
          <option value={8}>8px</option>
          <option value={12}>12px</option>
          <option value={16}>16px</option>
        </Select>
        <Box height="20px" lineHeight="20px" whiteSpace="nowrap">
          Step speed:
        </Box>
        <Select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          width="8rem"
          isDisabled={run}
        >
          <option value={0}>0ms</option>
          <option value={10}>10ms</option>
          <option value={50}>50ms</option>
          <option value={100}>100ms</option>
          <option value={250}>250ms</option>
          <option value={500}>500ms</option>
          <option value={1000}>1000ms</option>
        </Select>
      </Flex>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyItems="center"
        gap="1rem"
      >
        <Button
          width="8rem"
          marginBottom="1rem"
          onClick={() => setRun(!run)}
          marginTop="2"
        >
          {run ? 'Pause' : 'Play'}
        </Button>
        <Button
          width="8rem"
          marginBottom="1rem"
          onClick={() => setBoardArray(create2DArray(columns, rows))}
          marginTop="2"
        >
          Clear
        </Button>
      </Flex>
      <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
    </Flex>
  );
};

export default Board;

import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  theme,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Board from './components/Board';
import SliderInput from './components/NumberInputContainer';
import { create2DArray } from './utils/utils';
import {
  blinker,
  toad,
  beacon,
  pulsar,
  pentaDecathlon,
  glider,
  lightWeightSS,
  middleWeightSS,
  heavyWeightSS,
  rPentomino,
  diehard,
  acorn,
  gosperGliderGun,
} from './utils/Patterns';

export const App = () => {
  const minColumns = 20;
  const maxColumns = 200;
  const defaultColumns = 50;

  const minRows = 20;
  const maxRows = 200;
  const defaultRows = 50;

  const defaultTileLength = 14;

  const [columns, setColumns] = useState<number>(defaultColumns);
  const [rows, setRows] = useState<number>(defaultRows);
  const [boardArray, setBoardArray] = useState<boolean[][]>(() =>
    create2DArray(columns, rows)
  );

  const onColumnsChange = (value: number) => {
    if (value >= minColumns && value <= maxColumns) setColumns(value);
  };
  const onRowsChange = (value: number) => {
    if (value >= minRows && value <= maxRows) setRows(value);
  };

  useEffect(() => {
    const temp_arr = create2DArray(columns, rows);
    setBoardArray(temp_arr);
  }, [columns, rows]);

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="white" textAlign="center" fontSize="l">
        <VStack minHeight={'100vh'} spacing={4} p={3}>
          <Flex flexDirection="row" alignItems="center" justifyItems="center">
            <Box height="20px" lineHeight="20px" paddingRight="1rem">
              Columns:
            </Box>
            <SliderInput
              defaultValue={defaultColumns}
              minValue={minColumns}
              maxValue={maxColumns}
              value={columns}
              setValue={onColumnsChange}
            />
            <Box height="20px" lineHeight="20px" paddingRight="1rem">
              Rows:
            </Box>
            <SliderInput
              defaultValue={defaultRows}
              minValue={minRows}
              maxValue={maxRows}
              value={rows}
              setValue={onRowsChange}
            />
          </Flex>
          <Stack direction="row" spacing={2}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Oscillators
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setBoardArray(blinker(columns, rows))}>
                  Blinker
                </MenuItem>
                <MenuItem onClick={() => setBoardArray(toad(columns, rows))}>
                  Toad
                </MenuItem>
                <MenuItem onClick={() => setBoardArray(beacon(columns, rows))}>
                  Beacon
                </MenuItem>
                <MenuItem onClick={() => setBoardArray(pulsar(columns, rows))}>
                  Pulsar
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(pentaDecathlon(columns, rows))}
                >
                  Penta-Decathlon
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Spaceships
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setBoardArray(glider(columns, rows))}>
                  Glider
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(lightWeightSS(columns, rows))}
                >
                  LightWeight Spaceship
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(middleWeightSS(columns, rows))}
                >
                  MiddleWeight Spaceship
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(heavyWeightSS(columns, rows))}
                >
                  HeavyWeight Spaceship
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Methuselahs
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => setBoardArray(rPentomino(columns, rows))}
                >
                  R-pentomino
                </MenuItem>
                <MenuItem onClick={() => setBoardArray(diehard(columns, rows))}>
                  Diehard
                </MenuItem>
                <MenuItem onClick={() => setBoardArray(acorn(columns, rows))}>
                  Acorn
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Guns
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => setBoardArray(gosperGliderGun(columns, rows))}
                >
                  Gosper's Glider Gun
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Board tileLength={defaultTileLength} boardArray={boardArray} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

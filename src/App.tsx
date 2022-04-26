import { useState } from 'react';
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
} from '@chakra-ui/react';
import { customTheme } from './utils/customTheme';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Board from './components/Board';
import NumberInput from './components/NumberInputContainer';
import { resize2DArray } from './utils/utils';
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
  const maxColumns = 500;
  const defaultColumns = 50;

  const minRows = 20;
  const maxRows = 500;
  const defaultRows = 50;

  const [boardArray, setBoardArray] = useState<boolean[][]>(() =>
    gosperGliderGun()
  );
  const [disableUI, setDisableUI] = useState<boolean>(false);

  const onColumnsChange = (value: number) => {
    if (value >= minColumns && value <= maxColumns)
      setBoardArray(resize2DArray(value, boardArray[0].length, boardArray));
  };
  const onRowsChange = (value: number) => {
    if (value >= minRows && value <= maxRows)
      setBoardArray(resize2DArray(boardArray.length, value, boardArray));
  };

  const importPattern = (pattern: boolean[][]) => {
    setBoardArray(() => pattern);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box backgroundColor="blackAlpha.50" textAlign="center" fontSize="l">
        <VStack minHeight={'100vh'} spacing={4} p={3}>
          <Flex flexDirection="row" alignItems="center" justifyItems="center">
            <Box height="20px" lineHeight="20px" paddingRight="1rem">
              Columns:
            </Box>
            <NumberInput
              defaultValue={defaultColumns}
              minValue={minColumns}
              maxValue={maxColumns}
              stepSize={2}
              value={boardArray.length}
              setValue={onColumnsChange}
              isDisabled={disableUI}
            />
            <Box height="20px" lineHeight="20px" paddingRight="1rem">
              Rows:
            </Box>
            <NumberInput
              defaultValue={defaultRows}
              minValue={minRows}
              maxValue={maxRows}
              stepSize={2}
              value={boardArray[0].length}
              setValue={onRowsChange}
              isDisabled={disableUI}
            />
          </Flex>
          <Stack direction="row" spacing={2}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Oscillators
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => setBoardArray(blinker())}
                  isDisabled={disableUI}
                >
                  Blinker
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(toad())}
                  isDisabled={disableUI}
                >
                  Toad
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(beacon())}
                  isDisabled={disableUI}
                >
                  Beacon
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(pulsar())}
                  isDisabled={disableUI}
                >
                  Pulsar
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(pentaDecathlon())}
                  isDisabled={disableUI}
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
                <MenuItem
                  onClick={() => importPattern(glider())}
                  isDisabled={disableUI}
                >
                  Glider
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(lightWeightSS())}
                  isDisabled={disableUI}
                >
                  LightWeight Spaceship
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(middleWeightSS())}
                  isDisabled={disableUI}
                >
                  MiddleWeight Spaceship
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(heavyWeightSS())}
                  isDisabled={disableUI}
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
                  onClick={() => setBoardArray(rPentomino())}
                  isDisabled={disableUI}
                >
                  R-pentomino
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(diehard())}
                  isDisabled={disableUI}
                >
                  Diehard
                </MenuItem>
                <MenuItem
                  onClick={() => setBoardArray(acorn())}
                  isDisabled={disableUI}
                >
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
                  onClick={() => setBoardArray(gosperGliderGun())}
                  isDisabled={disableUI}
                >
                  Gosper's Glider Gun
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Board
            boardArray={boardArray}
            setBoardArray={setBoardArray}
            setDisableUI={setDisableUI}
          />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

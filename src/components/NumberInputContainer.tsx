import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

interface NumberInputContainerProps {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  value: number;
  setValue: (value: number) => void;
}

const NumberInputContainer = ({
  defaultValue,
  minValue,
  maxValue,
  value,
  setValue,
}: NumberInputContainerProps) => {
  const handleChange = (value: any) => setValue(value);

  return (
    <NumberInput
      defaultValue={defaultValue}
      min={minValue}
      max={maxValue}
      maxW="100px"
      mr="2rem"
      value={value}
      onChange={handleChange}
    >
      <NumberInputField readOnly />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumberInputContainer;

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
  stepSize: number;
  value: number;
  setValue: (value: number) => void;
  isDisabled: boolean;
}

const NumberInputContainer = ({
  defaultValue,
  minValue,
  maxValue,
  stepSize,
  value,
  setValue,
  isDisabled,
}: NumberInputContainerProps) => {
  const handleChange = (value: any) => setValue(value);

  return (
    <NumberInput
      defaultValue={defaultValue}
      min={minValue}
      max={maxValue}
      maxW="100px"
      mr="2rem"
      step={stepSize}
      value={value}
      onChange={handleChange}
      borderColor="gray.300"
      isDisabled={isDisabled}
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

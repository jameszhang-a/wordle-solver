import { HStack, Input, PinInput, PinInputField } from '@chakra-ui/react';

const WordSearch = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <HStack>
      <PinInput
        type='alphanumeric'
        value={value}
        onChange={handleChange}
        manageFocus='false'
        defaultValue='-----'
        size='lg'
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export default WordSearch;

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
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
    // <Input value={value} onChange={handleChange} maxLength='1' />
  );
};

export default WordSearch;

import { Input } from '@chakra-ui/react';

const WordSearch = ({ value, handleChange }) => {
  return <Input value={value} onChange={handleChange} maxLength='5' />;
};

export default WordSearch;

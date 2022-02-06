import { Input } from '@chakra-ui/react';
const MultiLetterInput = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <Input value={value} onChange={handleChange} />;
};

export default MultiLetterInput;

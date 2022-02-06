import { Input } from '@chakra-ui/react';
const ExtraWords = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <Input value={value} onChange={handleChange} maxLength='1' />;
};

export default ExtraWords;

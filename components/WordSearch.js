import { HStack, Input, PinInput, PinInputField, Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const WordSearch = ({ value, setValue }) => {
  const handleChange = (e, idx) => {
    const newVal = [ ...value ];
    newVal[idx] = e.target.value;
    setValue(newVal);
  };

  return (
    <Flex direction='row'>
      {value.map((val, idx) => {
        return (
          <Input
            className={styles.inputBox}
            onChange={(e) => handleChange(e, idx)}
            value={val}
            maxLength={1}
            key={idx}
          />
        );
      })}
    </Flex>
  );
};

export default WordSearch;

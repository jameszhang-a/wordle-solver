import { Flex, Input } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const WrongLetters = ({ wrongLetters, setWrongLetters }) => {
  const handleChange = (e, idx) => {
    const value = e.target.value;
    const isLetter = /^[A-Za-z]*$/.test(value);
    if (isLetter) {
      const newObj = {
        ...wrongLetters,
        [idx] : value
      };
      setWrongLetters(newObj);
    }
  };

  return (
    <Flex direction='row'>
      <Input
        className={styles.inputBox}
        onChange={(e) => handleChange(e, 'first')}
        value={wrongLetters?.first}
      />
      <Input
        className={styles.inputBox}
        onChange={(e) => handleChange(e, 'second')}
        value={wrongLetters?.second}
      />
      <Input
        className={styles.inputBox}
        onChange={(e) => handleChange(e, 'third')}
        value={wrongLetters?.third}
      />
      <Input
        className={styles.inputBox}
        onChange={(e) => handleChange(e, 'fourth')}
        value={wrongLetters?.fourth}
      />
      <Input
        className={styles.inputBox}
        onChange={(e) => handleChange(e, 'fifth')}
        value={wrongLetters?.fifth}
      />
    </Flex>
  );
};

export default WrongLetters;

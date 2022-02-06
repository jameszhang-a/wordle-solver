import { Flex, Input } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const WrongLetters = ({ wrongLetters, setWrongLetters }) => {
  const handleChange = (e, idx) => {
    const valid = /^[a-z]*$/.test(e.target.value);
    
    // Have no idea why I can't just do {idx: e.target.value}??
    // this seems so messy but i guess it works 
    if(valid){
    let newObj;
    switch (idx) {
      case 'first':
        newObj = {
          ...wrongLetters,
          first : e.target.value
        };
        break;

      case 'second':
        newObj = {
          ...wrongLetters,
          second : e.target.value
        };
        break;

      case 'third':
        newObj = {
          ...wrongLetters,
          third : e.target.value
        };
        break;

      case 'fourth':
        newObj = {
          ...wrongLetters,
          fourth : e.target.value
        };
        break;

      case 'fifth':
        newObj = {
          ...wrongLetters,
          fifth : e.target.value
        };
        break;

      default:
        break;
    }
setWrongLetters(newObj)
    console.log(newObj);
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

import { Flex, Spacer, Heading } from '@chakra-ui/react';
import DarkSwitch from './DarkSwitch';

const Header = () => {
  return (
    <Flex bg='teal.400' align='center' justify='space-between' padding={4}>
      <Heading as='h1'>Wordle Solver</Heading>
      {/* <Spacer /> */}
      <DarkSwitch />
    </Flex>
  );
};

export default Header;

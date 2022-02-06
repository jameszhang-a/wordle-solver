import {
  Flex,
  Heading,
  HStack,
  VStack,
  Spacer,
  Button,
  ButtonGroup,
  IconButton,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import DarkSwitch from './DarkSwitch';

const Header = () => {
  const [ displayDropdown, setDisplayDropdown ] = useState('none');

  const ddColor = useColorModeValue('teal.500', '#1A202C');

  const mobileContent = (
    <Box
      w='100vw'
      bgColor={ddColor}
      display={displayDropdown}
      zIndex={20}
      h='100vh'
      pos='fixed'
      top='0'
      left='0'
      overflowY='auto'
      flexDir='column'
    >
      <Flex justify='flex-end'>
        <IconButton
          aria-label='Close menu'
          icon={<CloseIcon />}
          onClick={() => setDisplayDropdown('none')}
        />
      </Flex>

      <Flex direction='column' justify='center' align='center'>
        <Heading as='h1'>Wordle Solver</Heading>
        <Button
          as='a'
          href='https://www.powerlanguage.co.uk/wordle/'
          target='_blank'
          rel='noopener noreferrer'
          size='lg'
          mt='50'
        >
          Official Wordle
        </Button>
        <Button
          as='a'
          href='https://www.wordleunlimited.com/'
          target='_blank'
          rel='noopener noreferrer'
          size='lg'
          mt='50'
        >
          Wordle Unlimited
        </Button>
      </Flex>
    </Box>
  );

  return (
    <Flex bg='teal.400' align='center' justify='space-between' padding={4}>
      <HStack display={[ 'none', 'none', 'flex', 'flex' ]}>
        <Heading as='h1'>Wordle Solver</Heading>
        <ButtonGroup>
          <Button
            as='a'
            href='https://www.powerlanguage.co.uk/wordle/'
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
          >
            Official Wordle
          </Button>
          <Button
            as='a'
            href='https://www.wordleunlimited.com/'
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
          >
            Wordle Unlimited
          </Button>
        </ButtonGroup>
      </HStack>

      {/* Hamburger menu that only shows up when size is small */}
      <IconButton
        aria-label='open menu'
        size='lg'
        mr={2}
        icon={<HamburgerIcon />}
        display={[ 'flex', 'flex', 'none', 'none' ]}
        onClick={() => setDisplayDropdown('flex')}
      />
      {mobileContent}

      <DarkSwitch />
    </Flex>
  );
};

export default Header;

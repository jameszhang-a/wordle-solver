import { useColorMode, Button, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <Button onClick={toggleColorMode}>
    //   Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    // </Button>
    <IconButton
      aria-label='toggle dark mode'
      colorScheme={colorMode === 'light' ? 'blackAlpha' : 'gray'}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default DarkSwitch;

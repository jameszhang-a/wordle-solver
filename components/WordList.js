import { Flex, HStack, Box, Text } from '@chakra-ui/react';

const Word = ({ word }) => {
  return (
    <HStack spacing='24px' align='center' mb='3'>
      {[ ...word ].map((char, idx) => {
        return (
          <Box
            key={`${word}-${idx}`}
            minW='60px'
            m='1'
            border='2px'
            align='center'
            justifyContent='center'
            rounded='md'
          >
            <Text fontSize='6xl' fontWeight='extrabold'>
              {char}
            </Text>
          </Box>
        );
      })}
    </HStack>
  );
};

const WordList = ({ words }) => {
  return (
    <div>
      {words.map((word, idx) => {
        // return <p key={word}>{word}</p>;
        if (idx < 50) return <Word key={word} word={word} />;
      })}
    </div>
  );
};

export default WordList;

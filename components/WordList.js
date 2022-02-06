import { Flex, HStack, Box, Text } from '@chakra-ui/react';

const Word = ({ word }) => {
  return (
    <HStack spacing='5px' align='center' mb='3' border='2px' rounded='md'>
      {[ ...word ].map((char, idx) => {
        return (
          <Box
            key={`${word}-${idx}`}
            minW='30px'
            m='1'
            align='center'
            justifyContent='center'
          >
            <Text fontSize='4xl' fontWeight='extrabold'>
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
      {words?.map((word, idx) => {
        // return <p key={word}>{word}</p>;
        if (idx < 50) return <Word key={word} word={word} />;
      })}
    </div>
  );
};

export default WordList;

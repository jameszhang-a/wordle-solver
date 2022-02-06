import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Button, Heading, Box, Text } from '@chakra-ui/react';

// Consts
import styles from '../styles/Home.module.css';
import { VALIDWORDS } from '../public/5-words';

// Components
import {
  Header,
  WordList,
  WordSearch,
  WrongLetters,
  MultiLetterInput
} from '../components';

export default function Home() {
  const [ guesses, setGuesses ] = useState(VALIDWORDS);
  const [ inputVal, setInputVal ] = useState([ '', '', '', '', '' ]);
  const [ extraVal, setExtraVal ] = useState('');
  const [ wrongVal, setWrongVal ] = useState('');
  const [ wrongLetters, setWrongLetters ] = useState({
    first  : '',
    second : '',
    third  : '',
    fourth : '',
    fifth  : ''
  });

  const hasInput = () => {
    for (const c of inputVal) if (c) return true;
    for (const i in wrongLetters) if (wrongLetters[i]) return true;
    if (extraVal || wrongVal) return true;

    // else
    return false;
  };

  useEffect(
    () => {
      const extraCharArr = [ ...extraVal.toLowerCase() ];
      const wrongCharArr = [ ...wrongVal.toLowerCase() ];
      // need this to loop through obj using index
      const posMap = [ 'first', 'second', 'third', 'fourth', 'fifth' ];

      setGuesses(
        VALIDWORDS.filter((word) => {
          // Match positional characters first
          if (
            hasInput() &&
            ((word[0] === inputVal[0].toLowerCase() || inputVal[0] === '') &&
              (word[1] === inputVal[1].toLowerCase() || inputVal[1] === '') &&
              (word[2] === inputVal[2].toLowerCase() || inputVal[2] === '') &&
              (word[3] === inputVal[3].toLowerCase() || inputVal[3] === '') &&
              (word[4] === inputVal[4].toLowerCase() || inputVal[4] === ''))
          ) {
            // matching additional yellow characters
            for (const char of extraCharArr) {
              if (!word.includes(char)) return false;
            }

            // excluding wrong characters
            for (const char of wrongCharArr) {
              if (word.includes(char)) return false;
            }

            // For each index, make sure non match between word and wrong word
            for (let i = 0; i < 5; i++) {
              const letters = [ ...wrongLetters[posMap[i]].toLowerCase() ];
              if (letters.includes(word[i])) return false;
            }

            return true;
          }
        })
      );
    },
    [ inputVal, extraVal, wrongVal, wrongLetters ]
  );

  const clearInput = () => {
    setInputVal([ '', '', '', '', '' ]);
    setExtraVal('');
    setWrongVal('');
    setWrongLetters({
      first  : '',
      second : '',
      third  : '',
      fourth : '',
      fifth  : ''
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle Solver</title>
        <meta
          name='description'
          content='Wordle Solver Created By James Zhang'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Wordle Solver</h1>

        <div>
          <Text mb='8px'>
            Input{' '}
            <Text as='span' color='green.500'>
              correct
            </Text>{' '}
            guesses:
          </Text>
          <WordSearch value={inputVal} setValue={setInputVal} />

          <Text mb='8px'>Exclude characters in each position here:</Text>
          <WrongLetters
            wrongLetters={wrongLetters}
            setWrongLetters={setWrongLetters}
          />

          <div>
            <Text mb='8px'>
              Input{' '}
              <Text as='span' color='yellow.500'>
                yellow
              </Text>{' '}
              letters: (no space needed){' '}
            </Text>
            <MultiLetterInput value={extraVal} setValue={setExtraVal} />
          </div>
          <div>
            <Text mb='8px'>
              Input{' '}
              <Text as='span' color='gray.500'>
                wrong
              </Text>{' '}
              letters:{' '}
            </Text>
            <MultiLetterInput value={wrongVal} setValue={setWrongVal} />
          </div>

          <Box mt='2' display='flex' justifyContent='center'>
            <Button variant='outline' colorScheme='green' onClick={clearInput}>
              New Game
            </Button>
          </Box>
        </div>

        {hasInput() && (
          <div className={styles.description}>
            <p>matches</p>
          </div>
        )}

        <WordList words={guesses} setGuesses={setGuesses} />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/jameszhang-a/wordle-solver'
          target='_blank'
          rel='noopener noreferrer'
        >
          made by jz
        </a>
      </footer>
    </div>
  );
}

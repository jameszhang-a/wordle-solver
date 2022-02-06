import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import WordSearch from '../components/WordSearch';
import styles from '../styles/Home.module.css';
import { VALIDWORDS } from '../public/5-words';
import { Button, Heading, Box, Text } from '@chakra-ui/react';
import WordList from '../components/WordList';
import { useState, useEffect } from 'react';
import MultiLetterInput from '../components/MultiLetterInput';

export default function Home() {
  const [ guesses, setGuesses ] = useState(VALIDWORDS);
  const [ inputVal, setInputVal ] = useState('-----');
  const [ extraVal, setExtraVal ] = useState('');
  const [ wrongVal, setWrongVal ] = useState('');

  useEffect(
    () => {
      const extraCharArr = [ ...extraVal ];
      const wrongCharArr = [ ...wrongVal ];

      setGuesses(
        VALIDWORDS.filter((word) => {
          // Match positional characters first
          if (
            (word[0] === inputVal[0] || inputVal[0] === '-') &&
            (word[1] === inputVal[1] || inputVal[1] === '-') &&
            (word[2] === inputVal[2] || inputVal[2] === '-') &&
            (word[3] === inputVal[3] || inputVal[3] === '-') &&
            (word[4] === inputVal[4] || inputVal[4] === '-')
          ) {
            // matching additional yellow characters
            for (const char of extraCharArr) {
              if (!word.includes(char)) return false;
            }
            // excluding wrong characters
            for (const char of wrongCharArr) {
              if (word.includes(char)) return false;
            }
            return true;
          }
        })
      );
    },
    [ inputVal, extraVal, wrongVal ]
  );

  const clearInput = () => {
    setInputVal('-----');
    setExtraVal('');
    setWrongVal('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Enter Green Letters!</h1>

        <div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <WordSearch value={inputVal} setValue={setInputVal} />
            </div>
          </div>
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
            <Button variant='outline' colorScheme='red' onClick={clearInput}>
              Clear
            </Button>
          </Box>
        </div>

        <div className={styles.description}>
          <Heading>matches</Heading>
        </div>

        <WordList words={guesses} setGuesses={setGuesses} />
      </main>

      <footer className={styles.footer}>
        <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
          Made by jz
        </a>
      </footer>
    </div>
  );
}

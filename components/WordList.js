const WordList = ({ words }) => {
  return (
    <div>
      {words.map((word) => {
        return <p key={word}>{word}</p>;
      })}
    </div>
  );
};

export default WordList;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameResult from "../GameResult/index.js";
import GuessInput from "../GuessInput/index.js";
import GuessResults from "../GuessResults/index.js";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameIsCompleted, setGameIsCompleted] = React.useState(false);
  const [userWonGame, setUserWonGame] = React.useState(false);
  const [disabledInput, setDisabledInput] = React.useState(false);
  function handleAddGuess(guess) {
    nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameIsCompleted(true);
      setDisabledInput(true);
      return;
    } else if (guess === answer) {
      setGameIsCompleted(true);
      setUserWonGame(true);
      setDisabledInput(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} disabled={disabledInput} />
      {gameIsCompleted && (
        <GameResult
          userWonGame={userWonGame}
          numGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;

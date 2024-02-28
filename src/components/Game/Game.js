import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameResult from "../GameResult/index.js";
import GuessInput from "../GuessInput/index.js";
import GuessResults from "../GuessResults/index.js";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameIsCompleted, setGameIsCompleted] = React.useState(false);
  const [userWonGame, setUserWonGame] = React.useState(false);
  function handleAddGuess(guess) {
    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGuesses([...guesses, guess]);
      setGameIsCompleted(true);
      return;
    }
    if (guess === answer) {
      setGameIsCompleted(true);
      setUserWonGame(true);
    }

    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} />
      {gameIsCompleted && (
        <GameResult userWonGame={userWonGame} numGuesses={guesses.length + 1} />
      )}
    </>
  );
}

export default Game;

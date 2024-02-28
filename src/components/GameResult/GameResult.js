import React from "react";

function GameResult({ userWonGame, numGuesses, answer }) {
  if (userWonGame) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameResult;

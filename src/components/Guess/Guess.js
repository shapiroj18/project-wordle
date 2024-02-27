import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const checkValues = checkGuess(word, answer);
  function getStatusClass(position) {
    const status = checkValues[position].status;
    if (status === "incorrect") {
      return "cell incorrect";
    } else if (status === "correct") {
      return "cell correct";
    } else if (status === "misplaced") {
      return "cell misplaced";
    } else throw new Error("Not a valid status");
  }
  return (
    <>
      <p className="guess">
        {range(5).map((num) =>
          word ? (
            <span key={num} className={getStatusClass(num)}>
              {word[num]}
            </span>
          ) : (
            <span key={num} className="cell"></span>
          )
        )}
      </p>
    </>
  );
}

export default Guess;

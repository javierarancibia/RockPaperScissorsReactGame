import React, { useState } from "react";
import Cachipun from "./Cachipun";
import { Button, Alert } from "react-bootstrap";

function CachipunContainer(props) {
  const [myChoice, setMyChoice] = useState("");
  const [result, setResult] = useState("");
  const [pcChoice, setPcChoice] = useState("0");
  const [score, setScore] = useState(0);
  const [gameCounter, setGameCounter] = useState(0);

  const onHandleButton = (e) => {
    e.preventDefault();
    const arr = ["piedra", "papel", "tijera"];
    const pcChoiceRandom = arr[Math.floor(Math.random() * 3)];
    const finalChoice = e.target.value;
    setGameCounter(gameCounter + 1);

    if (finalChoice === "piedra" && pcChoiceRandom === "papel") {
      setResult("lose");
    } else if (finalChoice === "piedra" && pcChoiceRandom === "tijera") {
      setResult("win");
      setScore(score + 1);
    } else if (finalChoice === "papel" && pcChoiceRandom === "piedra") {
      setResult("win");
      setScore(score + 1);
    } else if (finalChoice === "papel" && pcChoiceRandom === "tijera") {
      setResult("lose");
    } else if (finalChoice === "tijera" && pcChoiceRandom === "piedra") {
      setResult("lose");
    } else if (finalChoice === "tijera" && pcChoiceRandom === "papel") {
      setResult("win");
      setScore(score + 1);
    } else if (finalChoice === pcChoiceRandom) {
      setResult("draw");
    }
    setPcChoice(pcChoiceRandom);
    setMyChoice(finalChoice);
  };
  return (
    <div>
      {gameCounter < 5 && (
        <Cachipun
          myChoice={myChoice}
          result={result}
          pcChoice={pcChoice}
          onAddOption={onHandleButton}
          score={score}
        />
      )}
      {gameCounter >= 5 && (
        <div style={{marginTop: 200, marginLeft:100}} >
          <h2>Termino el partido. Tuviste un puntaje de {score >= 3 ? <h1>{score} por lo que ganaste el partido! :)</h1> : <h1>{score} por lo que perdiste el partido! :(</h1>}</h2>
          <Button className="mt-5" variant="outline-primary"
            value="tijera"
            size="lg"
            onClick={() => window.location.reload(false)}>
            Volver a jugar
          </Button>
        </div>
      )}
    </div>
  );
}

export default CachipunContainer;

import React from "react";
import { Button, Alert } from "react-bootstrap";
import './Cachipun.css'

function Cachipun(props) {
  return (
    <div>
      <h2 className="mt-5 text-center">Tu puntuacion es:{props.score}</h2>
      {props.result === "win" && (
        <Alert variant="success" className="alert">
          <Alert.Heading>Ganaste!!!</Alert.Heading>
          <p>Asi se hace! Has ganado esta partida! Tu Elegiste {props.myChoice} y el pc eligió {props.pcChoice}</p>
        </Alert>
      )}
      {props.result === "lose" && (
        <Alert variant="danger" className="alert">
          <Alert.Heading>No puede ser!</Alert.Heading>
          <p>Lamentablemente perdiste esta partida. Tu Elegiste {props.myChoice} y el pc eligió {props.pcChoice}</p>
        </Alert>
      )}
      {props.result === "draw" && (
        <Alert variant="warning" className="alert">
          <Alert.Heading>Que lata :/ empataron</Alert.Heading>
          <p>
            Empataron! Tu Elegiste {props.myChoice} y el pc eligió {props.pcChoice}</p>
        </Alert>
      )}
      <div className="row" style={{marginTop:200, marginLeft:50, marginRight:50}}>
        <div className="col">
          <Button
            variant="outline-primary"
            value="piedra"
            size="lg"
            block
            onClick={props.onAddOption}
            className="mt-3"
          >
            Piedra
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-primary"
            value="papel"
            size="lg"
            block
            onClick={props.onAddOption}
            className="mt-3"
          >
            Papel
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-primary"
            value="tijera"
            size="lg"
            block
            onClick={props.onAddOption}
            className="mt-3"
          >
            Tijera
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cachipun;

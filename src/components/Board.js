import React from "react";
import { useState, useEffect } from "react";

import Winner from "./Winner";

function Board() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    //check winner
    if (
      (board[0] == board[1] &&
        board[1] == board[2] &&
        board[0] != 0 &&
        board[1] != 0 &&
        board[2] != 0) ||
      (board[0] == board[3] &&
        board[3] == board[6] &&
        board[0] != 0 &&
        board[3] != 0 &&
        board[6] != 0) ||
      (board[0] == board[4] &&
        board[4] == board[8] &&
        board[0] != 0 &&
        board[4] != 0 &&
        board[8] != 0)
    ) {
      setWinner(board[0]);
      console.log(board[0], "kazandı");
    } else if (
      board[3] == board[4] &&
      board[4] == board[5] &&
      board[3] != 0 &&
      board[4] != 0 &&
      board[5] != 0
    ) {
      setWinner(board[3]);
      console.log(board[3], "kazandı");
    } else if (
      board[6] == board[7] &&
      board[7] == board[8] &&
      board[6] != 0 &&
      board[7] != 0 &&
      board[8] != 0
    ) {
      setWinner(board[6]);
      console.log(board[6], "kazandı");
    } else if (
      board[1] == board[4] &&
      board[4] == board[7] &&
      board[1] != 0 &&
      board[4] != 0 &&
      board[7] != 0
    ) {
      setWinner(board[1]);
      console.log(board[1], "kazandı");
    } else if (
      (board[2] == board[5] &&
        board[5] == board[8] &&
        board[2] != 0 &&
        board[5] != 0 &&
        board[8] != 0) ||
      (board[2] == board[4] &&
        board[4] == board[6] &&
        board[2] != 0 &&
        board[4] != 0 &&
        board[6] != 0)
    ) {
      setWinner(board[2]);
      console.log(board[2], "kazandı");
    }
    //if the winning conditions are not met
    else {
      for (let i = 0; i < board.length; i++) {
        if (board[i] == 0) {
          break;
        } else if (i == board.length - 1 && board[i] != 0) {
          setWinner("DRAW!!");
          console.log("Draw!!");
          break;
        } else continue;
      }
    }
  }, [board]);

  function HandlePlay(item, index) {
    //game reset
    if (winner != false) {
      setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setWinner(false);
      setTurn(0);
      return;
    }
    //illegal move
    else if (item !== 0) {
      console.log("Not Empty!!");
      return;
    }

    //normal turn
    let tempBoard = [...board];
    if (turn == 0) {
      tempBoard[index] = "X";
    } else {
      tempBoard[index] = "O";
    }
    setBoard(tempBoard);
    setTurn(turn != 0 ? 0 : 1);
  }
  return (
    <div className="game">
      <div className={`${winner != false ? "opacity" : ""} board`}>
        {board.map((item, i) => {
          return (
            <div className="box" onClick={() => HandlePlay(item, i)} key={i}>
              {item != 0 ? item : false}
            </div>
          );
        })}
      </div>
      <div className="winner">
        {winner && (
          <div>
            <Winner props={winner}></Winner>
          </div>
        )}
      </div>
    </div>
  );
}

export default Board;

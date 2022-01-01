import React, { useState } from 'react'
import Board from './Board'
import './style.css';

const Game = () => {
//  クラスのconstructor内で `this.state` の初期化をやめて `useState` フックを使う
  //  this.state = {
  //    history: [
  //      {
  //        squares: Array(9).fill(null)
  //      }
  //   ],
  // useState()を使って、関数コンポーネントに状態を持たせる
  // const [state変数, set関数] = useState(初期値)

    const [history,setHistory] = useState([
        {
            squares: Array(9).fill(null)
        }
    ]);

    const [xIsNext,setXIsNext] = useState(true);

    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) {
        return;
    }
    const handleClick = i => {
        squares[i] = xIsNext ? "X" : "Y";
        xIsNext(!xIsNext)
    }
    const winner = calculateWinner(current.squares)
    let status;
    if (winner) {
        status = `Winner+ ${winner}`;
    }
    else{
        status + `Next player: ${xIsNest ? "O" : "X"}`
    }

    return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
    );
}
const calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Game;
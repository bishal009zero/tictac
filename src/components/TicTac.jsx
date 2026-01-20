import { useState } from "react";

const calculateWinner = (board) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,9],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }
    return null;
}


const TicTactoe = () => {

     const [board, setBoard] =useState(Array(9).fill(null));
     const [xIsNext, setXIsNext] = useState(true);

     const winner = calculateWinner(board);

     const handleClick = (index) => {
       
       const newBoard = [...board];
       newBoard[index] = xIsNext ? "x" : "o";
       setBoard(newBoard);
       setXIsNext(!xIsNext)
     }

     const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
     }

  return (
    <div className="min-h-screen flex-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-80">
      <h1 className="text-3xl font-bold text-center mb-4">Tic Tac Toe</h1>

      <p className="text-center mb-4 text-lg">{winner
        ? `Winner: ${winner}`
        : `Next Player: ${xIsNext ? "x" : "o"}`
        }</p>

      <div className="grid grid-cols-3 gap-3">
        {board.map((value, index) => (
            <button 
            className="h-20 w-20 text-3xl font-bold bg-gray-700 rounded-lg flex-center" 
            key={index}
            onClick={() => handleClick(index)}
            >
                {value}
            </button>
        ))}
      </div>

      <button 
      onClick={resetGame}
      className="mt-5 w-full py-2 bg-red-500 rounded-lg font-semibold">
        Reset Game
      </button>
    </div>
    </div>
  )
}

export default TicTactoe;

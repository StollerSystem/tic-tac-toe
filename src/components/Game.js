import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions/index'

class Game extends React.Component {
  constructor(props) {
    super(props);    
  }  

  handleClick(i) {
    const { dispatch } = this.props;
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    console.log("squares");
    console.log(squares);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';    
    const action1 = a.addSquares(squares,history);
    dispatch(action1);
    const action2 = a.stepNumber(history.length);
    dispatch(action2);
    const action3 = a.xIsNext();
    dispatch(action3);
  }

  jumpTo(step) {
    const { dispatch } = this.props;
    const action1 = a.stepNumber(step);
    dispatch(action1);
    const action2 = a.xIsNext();
    dispatch(action2);    
  }  

  render() {
    const history = this.props.history;
    console.log(history)
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button className="btn btn-primary"onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = winner+" WINS!!!";
    } else {
      status = 'NEXT PLAYER: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>
           <h3>{status}</h3>
          </div>
          <div className="timeTravel">
            <h4>TIME TRAVEL</h4>
            <ol>{moves}</ol>
          </div>
          
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

Game.propTypes = {
  history: PropTypes.array,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext
  }
}

Game = connect(mapStateToProps)(Game);

export default Game;
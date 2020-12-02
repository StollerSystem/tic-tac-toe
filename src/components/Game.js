import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // history: [{squares: Array(9).fill(null)}],
    //   // stepNumber: 0,
    //   // xIsNext: true,
    // };
  }

  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1);    
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O'; // If whatever happends before ? is truthy, do 'X' - if falsey do 'O.'
  //   this.setState({
  //     history: history.concat([{
  //     squares: squares,
  //   }]),  
  //     stepNumber: history.length,
  //     xIsNext: !this.state.xIsNext
  //   });

    
  // }

  handleClick(i) {
    const { dispatch } = this.props;
    

    const history = this.props.history.slice(0, this.props.stepNumber + 1);    
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O'; // If whatever happends before ? is truthy, do 'X' - if falsey do 'O.'

    const action1 = {
      type: 'ADD_SQUARES',
    squares: squares
    }
    dispatch(action1)

    const action2 = {
      type: 'STEP_NUMBER',
      stepNumber: history.length
    }
    dispatch(action2)
    
    const  action3 = {
      type: 'X_IS_NEXT',    
    }
    dispatch(action3)

    // this.setState({
    //   history: history.concat([{
    //   squares: squares,
    // }]),  
    //   stepNumber: history.length,
    //   xIsNext: !this.state.xIsNext
    // });

    
  }

  jumpTo(step) {
    const { dispatch } = this.props;
    
    const action1 = {
      type: 'STEP_NUMBER',
      stepNumber: step
    };
    dispatch(action1);

    const action2 = {
      type: "X_IS_NEXT"
    };
    dispatch(action2);
    
    // this.setState({
    //   stepNumber: step,
    //   xIsNext: (step % 2) === 0,
    // });
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
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    
    let status;
    if (winner) {
      status = "Winner: " +winner;
    }else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
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
          <div>{status}</div>
          <ol>{moves}</ol>
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
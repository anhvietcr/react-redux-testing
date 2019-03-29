import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import actionCounter from '../actions/counter';

class CounterContainer extends Component {

  render() {
    return (
      <div className="container counter">
        <h3>{this.props.counter}</h3>
        <button className="btn btn-success counter--increment" onClick={() => this.props.increment(this.props.counter)}>+</button>
        <button className="btn btn-warning counter--decrement" onClick={() => this.props.decrement(this.props.counter)}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: counter => dispatch(actionCounter.increment(counter)),
  decrement: counter => dispatch(actionCounter.decrement(counter))
})

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterContainer)

export default Counter

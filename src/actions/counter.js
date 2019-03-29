import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const increment = (counter) => {
  return {
    type: INCREMENT,
    counter
  }
}

const decrement = (counter) => {
  return {
    type: DECREMENT,
    counter
  }
}

export default { increment, decrement }

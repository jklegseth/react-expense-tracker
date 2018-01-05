import { createStore } from 'redux';

// Action generators - return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. pure functions - output determined by input, doesn't change anything outside of scope
// `let a = 5;` const add = (b) { return a + 5; } // not pure, relies on a
// `let result;` const add = (a, b) { result = a + b; } // not pure, modifies result
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      // not required so we need to check
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // not required so we need to check
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      // count IS required so we don't check--we want an error if not provided
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 22}));
//
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });


store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 19}));

store.dispatch(setCount({count: 10}));

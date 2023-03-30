// import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { up, down } from './app/counterSlice';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// function reducer(state, action) {
//   if (action.type === 'up') {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// }
// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(down(1));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;

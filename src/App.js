import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value += action.step;
    },
  },
});

function reducer(state, action) {
  if (action.type === 'up') {
    return { ...state, value: state.value + action.step };
  }
  return state;
}
const initialState = { value: 0 };
const store = createStore(reducer, initialState);
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'up', step: 2 });
        }}
      >
        +
      </button>
      {count}
    </>
  );
}

export default App;

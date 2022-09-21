import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import {decrement,increment} from "./store/counterSlice"
function App() {
  const count = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <div>Counter</div>
    
    <div>{count}</div>
    <button onClick={() => dispatch(increment())}>Plus</button>
    <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default App;

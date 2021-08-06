import './App.css';
import Planets from '../Planets';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterReducer';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
          <h1>Star Wars Planets</h1>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <Planets />
    </div>
  );
}

export default App;

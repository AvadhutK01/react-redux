import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementBy2Handler = () => {
    dispatch({ type: 'INCREMENTBY2' });
  };

  const decrementBy2Handler = () => {
    dispatch({ type: 'DECREMENTBY2' });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: 'INCREMENTBY5' });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: 'DECREMENTBY5' });
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy2Handler}>Increment by 2</button>
        <button onClick={decrementBy2Handler}>Decrement by 2</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

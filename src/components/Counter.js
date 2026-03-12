import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementBy2Handler = () => {
    dispatch(counterActions.incrementBy2());
  };

  const decrementBy2Handler = () => {
    dispatch(counterActions.decrementBy2());
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5());
  };

  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementBy5());
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

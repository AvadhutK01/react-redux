import { useState, useEffect } from 'react';
import store from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const [counter, setCounter] = useState(store.getState().counter);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().counter);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const incrementHandler = () => {
    store.dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    store.dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

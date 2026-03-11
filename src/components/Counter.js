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

  const incrementBy2Handler = () => {
    store.dispatch({ type: 'INCREMENTBY2' });
  };

  const decrementBy2Handler = () => {
    store.dispatch({ type: 'DECREMENTBY2' });
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
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

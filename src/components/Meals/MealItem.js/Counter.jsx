import React from "react";

import { useState } from "react";
import classes from './Counter.module.css'

function Counter({ price2 }) {
  const [count, setCount] = useState(0);

  function plusHand() {
    return setCount((prevState) => prevState + 1);
  }
  function minusHand() {
    return setCount((prevState) => {
      if (prevState <= 0) {
        return count;
      }
      return prevState - 1;
    });
  }

  return (
    <div>
      <button className={classes.btn} onClick={plusHand}>+</button>
      <span className={classes.count}>{count}</span>
      <button className={classes.btn} onClick={minusHand}>-</button>
      <p className={classes.total}>total : {Number(price2 * count).toFixed(0)}$</p>
    </div>
  );
}

export default Counter;

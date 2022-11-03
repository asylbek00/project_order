import React from "react";
import Counter from "./Counter";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  // или ({name, description , price})   и будет без пропс
  const price1 = props.price.toFixed(2);
  // console.log(price1);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price1}$</p>
      </div>
      <Counter price2={price1}/>
      {/* <div><MealItemForm id={props.id}/></div> */}

      {/* <div>
        <MealItemForm />
      </div> */}
    </li>
  );
}

export default MealItem;

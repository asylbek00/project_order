import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "../Meals/MealItem.js/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m1",
    name: "Barbecue Burger",
    description: "American , raw , meaty",
    price: 12.99,
  },
];

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.id}
      />
      
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

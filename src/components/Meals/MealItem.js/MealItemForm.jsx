import React from 'react'
import Input from '../../UI/Input'
import styles from'./MealItemForm.module.css'

function MealItemForm(props) {
    const InputProps ={
        id: `amount_id-${props.id}`,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue:'1'
    }
  return (
<form className={styles.form}>
    {/* <input type="text" /> */}
    <Input label ='Amount' input={InputProps}/>
    <button>+ Add</button>
</form>  )
}

export default MealItemForm
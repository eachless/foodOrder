import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props =>{

    const amountInputRef = useRef();
    const[amountIsVaild, setAmountIsValid] = useState('true');
    const submitHandler = event =>{
        event.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount
        if(enterAmount.trim().length === 0 
        || enterAmountNumber < 1
        || enterAmountNumber > 5){
           setAmountIsValid(false);
           return;
        }
        // console.log(enterAmount);
        props.onAddToCart(enterAmountNumber)
    }
    return (<form className={classes.form} onSubmit ={submitHandler} >
        <Input
        ref ={amountInputRef}
        label = "total"
        input = {{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue:'1'
        }}
        />

        <button>+ADD</button>
        {!amountIsVaild && <p>Pls enter an valid amount(1-5).</p>}
    </form>);
}

export default MealItemForm;
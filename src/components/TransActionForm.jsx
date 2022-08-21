import { useState } from "react";

const TransActionForm = ({addTransAction,setIsShow}) => {
    const [formValues,setFormValues] = useState({
        type:"expense",
        desc:"",
        amount:0
    })
    
    const changeHandler = (e) =>{
        const value = e.target.value ; 
        setFormValues({
            ...formValues,
            [e.target.name] : value
        })
        // console.log(e.target.name,e.target.value);
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        if (formValues.desc === "" || formValues.amount === 0 ) {
            alert('هیچی  وارد نکردی عزیزم')
            return
        }
        addTransAction(formValues);
        setIsShow(false)
    }


    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="desc" 
                onChange={changeHandler} 
                value={formValues.desc}
            />
            <input 
                type="number" 
                name="amount" 
                onChange={changeHandler} 
                value={formValues.amount}
            />
            <div className="radio-box">
                <input 
                    type="radio" 
                    value="expense" 
                    name = "type" 
                    checked={formValues.type === "expense"}
                    onChange={changeHandler} 
                    id = "expense"
                />
                <label htmlFor="expense">Expense</label>
                <input 
                    type="radio" 
                    value="income" 
                    name = "type" 
                    checked={formValues.type === "income"}
                    onChange={changeHandler}
                    id = "income"
                />
                <label htmlFor="income">Income</label>
            </div>
            <button className="btn primary" type="submit">Add Transaction</button>
        </form>
    );
}

export default TransActionForm;
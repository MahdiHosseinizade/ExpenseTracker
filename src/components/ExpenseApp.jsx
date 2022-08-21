import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";


const ExpenseApp = () => {
    const [expense,setExpense] = useState(0)
    const [income,setIncome] = useState(0)
    const [transactions,setTransactions] = useState([])

    console.log(transactions);

    const addTransAction = (formValues) =>{
        const data = {...formValues,id:Date.now()}
        setTransactions([...transactions,data])
    }

    useEffect(()=>{
        let exp = 0
        let inc = 0
        transactions.forEach((t) =>{
            t.type === "expense" ? (exp = exp + parseFloat(t.amount)) :( inc = inc + parseFloat(t.amount))
        })
        setExpense(exp);
        setIncome (inc);
    },[transactions])

    return (
        <section className="container">
            <OverViewComponent addTransAction = {addTransAction} expense = {expense} income = {income}/>
            <TransActionComponent transactions ={transactions}/>
        </section>
    );
}

export default ExpenseApp;
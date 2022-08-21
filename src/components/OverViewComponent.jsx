import { useState } from "react";
import TransActionForm from "./TransActionForm";
import Select from 'react-select';



const OverViewComponent = ({expense,income,addTransAction}) => {
    
    const [isShow,setIsShow] = useState(false)
    

    return (
        <div>
            <div className="topSection">
                <p> Balance : {income - expense}</p>
                <button className={`btn ${isShow ? "cancel" : ""}`} onClick={() => setIsShow(!isShow)}>{isShow ? "Cancel" : "Add"}</button>
            </div>
            {isShow && <TransActionForm setIsShow=  {setIsShow} addTransAction = {addTransAction}/>}
            <div className="resultSection">
                <div className="expenseBox">Expense <span style={{color : "red"}} >{expense}$</span></div>
                <div className="expenseBox">Income  <span>{income}$</span> </div>
            </div>
        </div>
    );
}

export default OverViewComponent;
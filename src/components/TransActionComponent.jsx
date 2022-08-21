import { useEffect, useState } from "react";


const TransActionComponent = ({transactions}) => {
    
    const [searchItem,setSearchItem] = useState("")
    const [filteredTnx,setFilteredTnx] = useState(transactions)
    
    const filterTransAction = (search) =>{
        if (!search || search ==="") {
            setFilteredTnx(transactions)
            return
        }
        const filter = transactions.filter((trans) => trans.desc.toLowerCase().includes(search))
        setFilteredTnx(filter)
    }

    const changeHandler = (e) =>{
        setSearchItem(e.target.value);
        filterTransAction(e.target.value)
    }

    useEffect(()=>{
        filterTransAction(searchItem)
    },[transactions])

    if (!transactions.length) return <h3 style={{margin : "10px"}}>add some transaction</h3>

    return (
        <div>
            <input className="search" placeholder="search for transaction..." type="text" value={searchItem} onChange={changeHandler} />
            {filteredTnx.length ?
                filteredTnx.map((trans) => {
                return( 
                    <div  className={`transaction ${trans.type === "expense" ? "expense" : "income"}`} key={trans.id}>
                        <span>{trans.desc}</span>
                        <span>{trans.amount}$</span>
                    </div>
                )
            }): "no item match"}
        </div>
    );
}

export default TransActionComponent;
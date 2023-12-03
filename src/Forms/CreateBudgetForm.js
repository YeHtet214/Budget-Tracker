import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const CreateBudgetForm = ({ onAdd }) => {
    const [inputData, setInputData] = useState({
        category: "",
        amount: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setInputData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleClick = () => {
        onAdd(inputData)
        setInputData({category: "", amount: ""})
    }

    return ( 
        <Form method="post" action='/dashboard'>
            <h3>Create Budget</h3>
            <label>
                <span>Budget Name</span>
                <input 
                    type="text" 
                    name="category" 
                    value={inputData.category}
                    placeholder='e.g., Groceries'
                    onChange={handleChange}
                 />
            </label>
            <label>
                <span>Amount</span>
                <input 
                    type="number" 
                    name="amount" 
                    value={inputData.amount}
                    placeholder='e.g., $350' 
                    onChange={handleChange}
                />
            </label>
            <button type='submit' onClick={handleClick}>Create budget $</button>
        </Form>
    )
}
 
export default CreateBudgetForm;


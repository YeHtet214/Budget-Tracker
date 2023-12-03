import React from 'react';
import { Form } from 'react-router-dom';

const AddExpenseForm = () => {
    return ( 
        <Form method="post" action="/dashboard">
            <h3>Add New Expense</h3>
            <label>
                <span>Budget Name</span>
                <input type="text" name="expense" placeholder='e.g, Coffee' />
            </label>
            <label>
                <span>Amount</span>
                <input type="number" name="amount" placeholder='e.g., $3.5' />
            </label>
            <label id="budget-select">
                <span>Budget Category</span>
                <input type="select" name="budget-selector" placeholder='e.g., $350' />
            </label>
            <button type='submit'>Add Expense +</button>
        </Form>
     );
}

export default AddExpenseForm;
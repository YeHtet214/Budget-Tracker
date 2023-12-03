import React from 'react';

const BudgetCard = ({ budget }) => {
    return ( 
        <div className='budget-card'>
            <h3>{budget.category}</h3>
            <h4>{budget.amount}</h4>
            <button>Details</button>
        </div>
     );
}
 
export default BudgetCard;
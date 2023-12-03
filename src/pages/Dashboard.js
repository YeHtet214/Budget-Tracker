import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

//import Forms
import CreateBudgetForm from '../Forms/CreateBudgetForm';
import AddExpenseForm from '../Forms/AddExpenseForm';

// import components
import BudgetCard from '../components/BudgetCard';

export const budgetAction = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("budget") || formData.get("expense");
    const amount = formData.get("amount");

    return redirect("/dashboard");
}

const Dashboard = () => {
    const [budgets, setBudgets] = useState([]);

    const addBudget = (budget) => {
        setBudgets(prev => [...prev, budget]);
    }

    return ( 
        <div className="home-dashboard">
            <div className="forms-container">
                <CreateBudgetForm onAdd={addBudget} />
                <AddExpenseForm />
            </div>
            
            {/* // Add Budgets List */}
            <div className="budgets">
                {budgets?.map((budget, index) => {
                    return <BudgetCard 
                                key={index}
                                budget={budget}
                            />
                })}
            </div>
            {/* // Add New Expenses List */}
        </div>
    )
}
 
export default Dashboard;
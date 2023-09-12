import React from 'react';
import { useState } from 'react';
import Expenses from './Expenses/Expenses';
import NewExpenses from './newExpenses/NewExpenses';

const ExpensesCalc = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    const [expensesData, setExpensesData] = useState(expenses)


    const [newFormData, setNewFormData] = useState('')

    function handleNewData(data) {
        setExpensesData((prev) => {
            return [data, ...prev]
        })
        console.log(data)
        setNewFormData(data)
    }


    return (
        <div className='expenses-calc'>
            <NewExpenses handleNewData={handleNewData} />
            <Expenses items={expensesData} />
        </div>
    );
}
export default ExpensesCalc;
import React from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../newExpenses/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import '../newExpenses/ExpensesFilter.css'
import { useState } from 'react';
import Chart from '../Chart/Chart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021')
  function handleFilterYear(data) {
    setFilterYear(data)
  }
  const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === filterYear)

  let expensesContent = <p className='no-expenses'>No Expenses Data found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item, i) => {
      return < ExpenseItem
        key={i}
        title={item.title}
        amount={item.amount}
        date={item.date} />
    })
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} filterYearFn={handleFilterYear} />
        <Chart data={filteredExpenses} />
        {expensesContent}
      </Card>

    </div>
  );
}

export default Expenses;

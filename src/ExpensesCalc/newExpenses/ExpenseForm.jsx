import { useState } from "react"
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [value, setValue] = useState({ title: '', amount: undefined, date: '' })
    const [showExpenseForm, setShowExpenseForm] = useState(true)
    const handleChange = (e) => {
        setValue((prev) => {
            return { ...prev, [e.target.id]: e.target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.handleFormInput({ ...value, 'date': new Date(value.date), amount: +value.amount })
        setValue({ title: '', amount: '', date: '' })
    }
    const showForm = () => {
        setShowExpenseForm(!showExpenseForm)
    }

    const addExpenseBtn = <button onClick={showForm}>Add New Expense</button>
    if (showExpenseForm) {
        return addExpenseBtn
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label id='title'>Title</label>
                <input value={value.title} id='title' type="text" onChange={handleChange} />
            </div>
            <div className="new-expense__control">
                <label id='amount'>Amount</label>
                <input value={value.amount} id='amount' type="number" min="0.01" step="0.01" onChange={handleChange} />
            </div>
            <div className="new-expense__control">
                <label id='date'>Date</label>
                <input value={value.date} id='date' type="date" min="2019-1-1" max="2023-12-31" onChange={handleChange} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={showForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
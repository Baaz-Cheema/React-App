import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'
export default function NewExpenses(props) {
    function handleFormInput(formData){
           props.handleNewData(formData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm handleFormInput={handleFormInput}/>
        </div>
    )
}
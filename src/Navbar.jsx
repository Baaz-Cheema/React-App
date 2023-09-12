import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="n">
            <Link to='/'>Home</Link>
            <ul>
                <Link to='/markdown-previewer'>MarkDown Converter</Link>
                <Link to='/ExpensesCalc'>Expenses Chart</Link>
                <Link to='/stop-watch'>Pomodoro</Link>
                {/* <Link to='/todo-list'>Todo list</Link> */}
                <Link to='/quote'>quote-Fetcher</Link>
                <Link to='/calculator'>calculator</Link>
            </ul>
        </nav>
    )
}
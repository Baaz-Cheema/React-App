import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="n">
            <Link to='/'>Home</Link>
            <ul>
            <Link to='/markdown-previewer'>MarkDown</Link>
            <Link to='/drum-machine'>Drum-machine</Link>
            <Link to='/stop-watch'>Pomodoro</Link>
            <Link to='/todo-list'>Todo list</Link>
            <Link to='/quote'>quote-Fetcher</Link>
            <Link to='/calculator'>calculator</Link>
            </ul>
        </nav>
    )
}
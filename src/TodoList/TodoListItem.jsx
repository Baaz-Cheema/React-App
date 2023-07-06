import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import './TodoList.css'

export default function ({ value, removeTodo, editTodo, idx, checkBox, toggleTodo }) {

    return (
        <div className="todoItem">
            <Checkbox className='todoCheck' type="checkbox" checked={checkBox} onChange={toggleTodo} />
            <TextField
                sx={{
                    fontWeight: 'bolder',
                    textAlign: 'center'
                }}
                className='item'
                value={value}
                onChange={(e) => editTodo(e, idx)}
            ></TextField>
            <button className="delTodo" onClick={removeTodo}>
                <span class="material-symbols-outlined">
                    delete
                </span></button>
        </div>
    )
}
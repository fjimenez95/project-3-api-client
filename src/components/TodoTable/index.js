import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../../services/todoService';

const TodoTable = (props) => {
    const [items, setItems] = useState([]);

    async function fetchItems() {
        const todos = await getTodos();
        setItems(todos);
    }

    useEffect(() => {
        fetchItems();
    }, [])


    return (
        <div>
        <h3>Your List of Todos</h3>
        <table className='table table-striped mt-3'>
            <thead>
                <tr>
                    <th>To-Do</th>
                    <th>Due Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    items.map(todo => (
                        <tr key={todo._id}>
                            <td>{todo.text}</td>
                            <td>
                                <Link to={`/todos/edit/${todo.id}`}><button className="button muted-button">Edit</button></Link>
                            </td>
                            <td>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                } */}
            </tbody>
        </table>
      </div>
    )
}

export default TodoTable;
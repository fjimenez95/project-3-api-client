import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { deleteTodo } from '../../services/todoService'


const TodoTable = (props) => {

    const {register, handleSubmit} = useForm({ defaultValues: { text: props.todo ? props.todo.text : "" } });
    const history = useHistory();

    // const deleteTodo = handleSubmit((evt) => {
    //     alert(JSON.stringify(evt));
    // })

    async function handleDelete(id) {
        console.log(id);
        const response = await deleteTodo(id);
        console.log(response);
        props.setUserTodos(response);
    }

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
                {
                    props.todos.map((todo, idx) => (
                        <tr key={todo._id}>
                            <td>{todo.text}</td>
                            <td>
                                <Link to={`/todos/edit/${todo._id}`}><button className="button muted-button">Edit</button></Link>
                            </td>
                            <td>
                                <button type='submit' onClick={() => 
                                    handleDelete(todo._id)} 
                                    className='btn btn-primary'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
}

export default TodoTable;
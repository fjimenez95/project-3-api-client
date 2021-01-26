import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { deleteTodo } from '../../services/todoService'
import styles from './TodoTable.module.css';

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
        <table className='table table-striped mt-3'>
            <thead>
                <tr>
                    <th></th>
                    {/* <th className={styles.alignCenter}>Owner</th> */}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, idx) => (
                        <tr key={todo._id}>
                            <td className={styles.todobox}>{todo.text}</td>
                            {/* <td className={styles.alignCenter}>{todo.owner}</td> */}
                            <td className={styles.alignRight}>
                                <Link to={`/todos/edit/${todo._id}`}><button className={styles.button}>Edit</button></Link>
                            </td>
                            <td className={styles.alignRight}>
                                <button className={styles.button} type='submit' onClick={() => 
                                    handleDelete(todo._id)} 
                                    >Delete</button>
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
import { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm';
import { useRouteMatch } from 'react-router-dom';
import { getTodo } from '../../services/todoService'
import styles from './EditTodoPage.module.css';

function EditTodoPage(props) {

    const match = useRouteMatch();

    const [todo, setTodo] = useState();

    useEffect(() => {
        const fetchTodo = async () => {
            const todo = await getTodo(match.params.id)
            setTodo(todo);
        } 
        fetchTodo();
    }, [match.params.id])


    return todo ? (
        <div>
            <div className='mt-3'>
                <h3 className={styles.editTodoTitle}>Edit Todo Item</h3>
                <TodoForm 
                    setUserTodos={props.setUserTodos}
                    todo={todo}
                    type={'Edit'}
                /> 
            </div>
        </div>
    )
    : ( 
    <div>Loading...</div> 
    )
}

export default EditTodoPage;
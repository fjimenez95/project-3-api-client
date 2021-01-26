import TodoTable from '../../components/TodoTable';
import { Link } from 'react-router-dom';
import styles from './TodoPage.module.css';

function TodoPage(props) {
    return (
        <div className={styles.TodoTable}>
            <h3 className={styles.todoTitle}>Your List of Todos</h3>
            <TodoTable 
                setUserTodos={props.setUserTodos}
                todos={props.todos}
                deleteHandler={props.deleteHandler}
            />
        </div>
    )
}

export default TodoPage;
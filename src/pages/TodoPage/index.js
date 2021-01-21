import TodoTable from '../../components/TodoTable';
import { Link } from 'react-router-dom';

function TodoPage(props) {
    return (
        <div>
            <Link to='/todos/create'><button>Create New Todo</button></Link>
            <TodoTable 
                todos={props.todos}
                deleteHandler={props.deleteHandler}
            />
        </div>
    )
}

export default TodoPage;
import TodoForm from '../../components/TodoForm';
import { createTodo } from '../../services/todoService';

function CreateTodoPage(props) {

    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    //     async function createANewTodo() {
    //         const todos = await createTodo(data);
    //         console.log('TODOS', todos);
    //         setUserTodos(todos);
    //     }
    // };


    return (
        <div>
            <div className='mt-3'>
                <h3>Create Todo Item</h3>
                <TodoForm 
                    onCreateSubmit={props.onCreateSubmit}
                    type={'Create'} 
                /> 
            </div>
        </div>
    )
}

export default CreateTodoPage;
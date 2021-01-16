import { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm';

function EditTodoPage(props) {

    const [todo, setTodo] = useState();

    useEffect(() => {
        setTodo({
            text: `do laundry`
        })
    }, [])

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return todo ? (
        <div>
            <div className='mt-3'>
                <h3>Edit Todo Item</h3>
                <TodoForm 
                    todo={todo} 
                    onSubmit={onSubmit} 
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
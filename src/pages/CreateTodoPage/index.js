import TodoForm from '../../components/TodoForm';

function CreateTodoPage(props) {

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
import TodoForm from '../../components/TodoForm';

function CreateTodoPage(props) {

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };


    return (
        <div>
            <div className='mt-3'>
                <h3>Create Todo Item</h3>
                <TodoForm 
                    onSubmit={onSubmit}
                    type={'Create'} 
                /> 
            </div>
        </div>
    )
}

export default CreateTodoPage;
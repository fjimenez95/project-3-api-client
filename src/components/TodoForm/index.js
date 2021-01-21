import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const TodoForm = (props) => {
    
    const {register, handleSubmit} = useForm({ defaultValues: { text: props.todo ? props.todo.text : "" } });
    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        if (props.type == 'Edit') {
            props.onEditSubmit(data);
        }
        if (props.type == 'Create') {
            props.onCreateSubmit(data);
        }
        history.push('/todos');
    })
    
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='text'>
                    Text:
                </label>
                <input className='form-control' ref={register} type='text' name='text' id='text' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btm-primary'>{props.type} Todo</button>
            </div>
        </form>
    )
}

export default TodoForm;
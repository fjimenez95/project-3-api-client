import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { updateTodo } from '../../services/todoService';
import styles from './TodoForm.module.css';

const TodoForm = (props) => {
    
    const match = useRouteMatch();

    const {register, handleSubmit} = useForm({ defaultValues: { text: props.todo ? props.todo.text : "" } });
    const history = useHistory();

    async function handleEditSubmit(data) {
        const response = await updateTodo(data, match.params.id);
        console.log('RES AT EDIT', response);
        props.setUserTodos(response);
        history.push('/todos');
      }

    const submitHandler = handleSubmit((data) => {
        if (props.type === 'Edit') {
            handleEditSubmit(data);
        }
        if (props.type === 'Create') {
            props.onCreateSubmit(data);
        }
    })
    
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className='form-group'>
                <label className={styles.textInputTitle} htmlFor='text'>
                    enter text here
                </label>
                <br />
                <input className={styles.textInput} ref={register} type='text' name='text' id='text' />
            </div>
            <div className='form-group'>
                <button type='submit' className={styles.button}>{props.type} Todo</button>
            </div>
        </form>
    )
}

export default TodoForm;
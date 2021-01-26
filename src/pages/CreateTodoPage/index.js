import TodoForm from '../../components/TodoForm';
import styles from './CreateTodoPage.module.css';

function CreateTodoPage(props) {

     return (
        <div>
            <div>
                <h3 className={styles.createTodoTitle}>Create Todo Item</h3>
                <TodoForm 
                    onCreateSubmit={props.onCreateSubmit}
                    type={'Create'} 
                /> 
            </div>
        </div>
    )
}

export default CreateTodoPage;
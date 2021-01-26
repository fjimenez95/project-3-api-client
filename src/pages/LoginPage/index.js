import { useState } from 'react';
import { login } from '../../services/userService';
import styles from './LoginPage.module.css';


function LoginPage (props) {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return ({
            email: '',
            password: '',
        })
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await login(formState);
            // setFormState(getInitialFormState());
            props.handleSignupOrLogin();
            props.history.push('/todos');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className={styles.page}>
            <form className={styles.loginform} onSubmit={handleSubmit}>
                <h3 className={styles.logintitle}>login</h3>
                <div className={styles.textInputTitle}>username</div>
                <input 
                    value={formState.email} 
                    className={styles.textInput}
                    onChange={handleChange}
                    type='email'
                    name='email' />
                <br />
                <br />
                    <div className={styles.textInputTitle}>password</div>
                <input 
                    value={formState.password} 
                    onChange={handleChange}
                    className={styles.textInput}
                    type='password' 
                    name='password' />
                <br />
                <br />
                <button className={styles.button} type='submit'>
                    Login
                </button>
            </form>
        </div>
    )

}

export default LoginPage;

import { useState } from 'react';
import { signup } from '../../services/userService'
import styles from './SignupForm.module.css'


function SignupForm (props) {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return ({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
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
            await signup(formState);
            // setFormState(getInitialFormState());
            props.handleSignupOrLogin();
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <form className={styles.signupform} onSubmit={handleSubmit}>
                <div className={styles.textInputTitle}>first name</div>
                <input 
                    className={styles.textInput}
                    value={formState.firstName} 
                    onChange={handleChange}
                    type='text' 
                    name='firstName' 
                    />
                <br />
                <div className={styles.textInputTitle}>last name</div>
                <input 
                    className={styles.textInput}
                    value={formState.lastName} 
                    onChange={handleChange}
                    type='text' 
                    name='lastName' 
                    />
                <br />
                <div className={styles.textInputTitle}>email</div>
                <input 
                    className={styles.textInput}
                    value={formState.email} 
                    onChange={handleChange}
                    type='email'
                    name='email' />
                <br />
                <div className={styles.textInputTitle}>password</div>
                <input 
                    className={styles.textInput}
                    value={formState.password} 
                    onChange={handleChange}
                    type='password' 
                    name='password' />
                <br />
                <br />
                {/* <input 
                    className={styles.textInput}
                    value={formState.passwordConf} 
                    onChange={handleChange}
                    type='password' 
                    name='passwordConf'/> */}
                <button className={styles.button}>
                    Signup
                </button>
            </form>
        </div>
    )

}

export default SignupForm;
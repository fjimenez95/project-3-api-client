import { useState } from 'react';
import { login } from '../../services/userService';


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
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <input 
                    value={formState.email} 
                    onChange={handleChange}
                    type='email'
                    name='email' />
                <input 
                    value={formState.password} 
                    onChange={handleChange}
                    type='password' 
                    name='password' />
                <button>
                    Login
                </button>
            </form>
        </div>
    )

}

export default LoginPage;

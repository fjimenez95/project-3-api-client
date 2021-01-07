import { useState } from 'react';
import { signup } from '../../services/userService'


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
            setFormState(getInitialFormState());
    
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <input 
                    value={formState.firstName} 
                    onChange={handleChange}
                    type='text' 
                    name='firstName' 
                    />
                <input 
                    value={formState.lastName} 
                    onChange={handleChange}
                    type='text' 
                    name='lastName' 
                    />
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
                <input 
                    value={formState.passwordConf} 
                    onChange={handleChange}
                    type='password' 
                    name='passwordConf'/>
                <button>
                    Signup
                </button>
            </form>
        </div>
    )

}

export default SignupForm;
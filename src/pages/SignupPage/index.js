import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage(props) {
    return (
        <div>
            <SignupForm 
                {...props}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
        </div>
    )
}

export default SignupPage;
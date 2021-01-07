import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage(props) {
    return (
        <div>
            <SignupForm 
                {...props}
            />
        </div>
    )
}

export default SignupPage;
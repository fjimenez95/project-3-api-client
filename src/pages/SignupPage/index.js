import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './SignupPage.module.css';

function SignupPage(props) {
    return (
        <div>
            <h3 className={styles.signuptitle}>signup</h3>
            <SignupForm 
                {...props}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
        </div>
    )
}

export default SignupPage;
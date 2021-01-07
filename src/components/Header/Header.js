import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <h1>PROJECT 3</h1>
            <nav>
                <ul>
                    <li>Login</li>
                    <li>Logout</li>
                    <li>Sign up</li>
                    <li>Dashboard</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <Link to='/'>
                <h1>PROJECT 3</h1>
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li><Link to='/' onClick={props.handleLogout}>Logout</Link></li>
                            <li><Link to='/'>Dashboard</Link></li>
                            <li><Link to='/todos'>Todos</Link></li>
                        </>
                        :
                        <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Sign up</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
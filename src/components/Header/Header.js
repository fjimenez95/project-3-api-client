import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './todoslogo.png'
import { useState } from 'react';

const Header = (props) => {
    const [color, changeColor] = useState("#282c34");

    return (
        <header className={styles.Header}>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt="Logo" />
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li><Link className={styles.headerbutton} to='/' onClick={props.handleLogout}>logout</Link></li>
                            {/* <li><Link className={styles.headerbutton} to='/' onClick={() => changeColor("#282c34")}>dashboard</Link></li> */}
                            <li><Link className={styles.headerbutton} to='/todos'>my todos</Link></li>
                            <li><Link className={styles.headerbutton} to='/todos/create'>create new todo</Link></li>
                        </>
                        :
                        <>
                            <li><Link className={styles.headerbutton} to='/login'>login</Link></li>
                            <li><Link className={styles.headerbutton} to='/signup'>sign up</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
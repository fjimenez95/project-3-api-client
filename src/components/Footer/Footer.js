import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} - Project 3</p>
        </footer>
    )
}

export default Footer;
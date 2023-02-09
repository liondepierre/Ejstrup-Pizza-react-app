import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className={styles.navbar}>
            <li className={styles.navImg}>
                <img src='src/assets/img/logo.png' alt='logo'/>
                Pizza Kebab House Ejstrupholm
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to={"/"}>Hjem</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to={"/menukort"}>Menukort</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to={"/åbningstider"}>Åbningstider</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to={"/galleri"}>Galleri</Link>
            </li>
        </nav>
    );
}

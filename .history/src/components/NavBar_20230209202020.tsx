import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';

export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className={styles.navbar}>
            <li className={styles.navItem}>
                <Link to={"/"}>Hjem</Link>
            </li>
            <li className={styles.navItem}>
                <Link to={"/"}>Hjem</Link>
            </li>
            <li className={styles.navItem}>
                <Link to={"/menukort"}>Menukort</Link>
            </li>
            <li className={styles.navItem}>
                <Link to={"/åbningstider"}>Åbningstider</Link>
            </li>
            <li className={styles.navItem}>
                <Link to={"/galleri"}>Galleri</Link>
            </li>
        </nav>
    );
}

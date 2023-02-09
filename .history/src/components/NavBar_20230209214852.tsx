import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
import pizzaLogo from '../assets/img/pizza-logo.png'
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className={styles.navbarClass}>
            <div className={styles.logoContainer}>
                <a className={styles.logo} href={pizzaLogo} />
            </div>
            <nav className={styles.navbar}>
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
        </div>
    );
}

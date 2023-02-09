import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
 
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navItems} to={"/"}>Hjem</Link>
            <Link className={styles.navItems} to={"/menukort"}>Menukort</Link>
            <Link className={styles.navItems} to={"/åbningstider"}>Åbningstider</Link>
            <Link className={styles.navItems} to={"/galleri"}>Galleri</Link>
        </nav>
    );
}

import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
 
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className={styles.navbar}>
            <Link to={"/"}>Hjem</Link>
            <Link to={"/menukort"}>Menukort</Link>
            <Link to={"/åbningstider"}>Åbningstider</Link>
            <Link to={"/galleri"}>Galleri</Link>
        </nav>
    );
}

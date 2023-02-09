import { Link } from 'react-router-dom';
import styles from 'src/components/NavBar.module.css';
 
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className={styles.gap}>
            <Link to={"/"}>Hjem</Link>
            <Link to={"/menukort"}>Menukort</Link>
            <Link to={"/åbningstider"}>Åbningstider</Link>
            <Link to={"/galleri"}>Galleri</Link>
        </nav>
    );
}

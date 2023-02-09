import { Link } from 'react-router-dom';
import 'src/components/NavBar.css';

export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav className='navbar'>
            <Link to={"/"}>Hjem</Link>
            <Link to={"/menukort"}>Menukort</Link>
            <Link to={"/åbningstider"}>Åbningstider</Link>
            <Link to={"/galleri"}>Galleri</Link>
        </nav>
    );
}

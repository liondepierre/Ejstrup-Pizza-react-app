import * as React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <nav >
            <Link to={"/"}>Hjem</Link>
            <Link to={"/"}>Menukort</Link>
            <Link to={"/"}>Åbningstider</Link>
            <Link to={"/"}>Galleri</Link>

        </nav>
    );
}

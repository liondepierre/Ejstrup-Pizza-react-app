import React from 'react';
import NavBar from '../components/NavBar';
import { DrinksProvider } from '../providers/DrinksProvider';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {



    return (
        <div>
            <NavBar />
        </div>

    );
}
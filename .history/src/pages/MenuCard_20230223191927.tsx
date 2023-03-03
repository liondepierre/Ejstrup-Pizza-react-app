import React from 'react';
import NavBar from '../components/NavBar';
import { DrinksProvider } from '../providers/DrinksProvider';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {

    let k = new DrinksProvider();


    return (
        <div>
            <NavBar />
            <button onClick={() => k.sendMessage()}>Send message</button>
        </div>

    );
}

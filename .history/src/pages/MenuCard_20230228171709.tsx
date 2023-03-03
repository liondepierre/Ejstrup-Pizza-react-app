import React from 'react';
import NavBar from '../components/NavBar';
import { Database } from '../server/database';
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {

    React.useEffect(() => {
        const dajdfaj = new Database(); 
    }, [])

    return (
        <div>
            <NavBar />
        </div>

    );
}

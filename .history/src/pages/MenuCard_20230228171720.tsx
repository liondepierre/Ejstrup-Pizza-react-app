import React from 'react';
import NavBar from '../components/NavBar';
import { Database } from '../server/database';
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {

    React.useEffect(() => {
        const k = new Database(); 
        console.log(k)
    }, [])

    return (
        <div>
            <NavBar />
        </div>

    );
}

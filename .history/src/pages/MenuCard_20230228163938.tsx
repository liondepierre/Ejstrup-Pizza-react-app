import React from 'react';
import NavBar from '../components/NavBar';
import { Database } from '../providers/database';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {


    React.useEffect(() => {
        const database = new Database();
        console.log(database)
    }, [])

    return (
        <div>
            <NavBar />
        </div>

    );
}

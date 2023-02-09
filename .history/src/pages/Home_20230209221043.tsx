import * as React from 'react';
import NavBar from '../components/NavBar';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    return (
        <div>
            <h1>Pizza Kebab House</h1>
            <NavBar/>
        </div>
        
    );
}

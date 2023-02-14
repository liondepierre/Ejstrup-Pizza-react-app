import * as React from 'react';
import NavBar from '../components/NavBar';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <NavBar/>
        </div>
        
    );
}

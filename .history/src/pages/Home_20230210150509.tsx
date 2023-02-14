import * as React from 'react';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{justifyContent: "center"}}>
            <NavBar/>
            </div>
            <div style={{justifyContent: "center"}}>
            <RestaurantImage/>
            </div>
        </div>
        
    );
}

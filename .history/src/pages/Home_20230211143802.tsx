import * as React from 'react';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    return (
        <div>
            <div>
                <NavBar />
                <div style={{ marginTop: "1%", display: "flex", justifyContent: "center", alignSelf: "flex-end" }}>
                    <RestaurantImage />
                </div>
            </div>
           
        </div>

    );
}
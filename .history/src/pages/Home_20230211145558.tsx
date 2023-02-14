import * as React from 'react';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';
import eliteSmiley from '../assets/img/eliteSmiley.png'

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
            <img style={{ width: "20%", height: "15%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />
        </div>

    );
}

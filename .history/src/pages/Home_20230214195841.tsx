import * as React from 'react';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';
import eliteSmiley from '../assets/img/eliteSmiley.png'
import { url } from 'inspector';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div>
            <NavBar />
            <div style={{
                position: "absolute",
                top: "50px",
                left: 0,
                right: 0,
                bottom: "50%",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1>My Website Title</h1>
                <p>Address</p>
                <p>Phone Number</p>
                <p>City</p>
            </div>
        </div>

    );
}

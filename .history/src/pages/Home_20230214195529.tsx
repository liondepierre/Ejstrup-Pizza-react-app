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
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 style={{ color: 'white' }}>Website Title</h1>
                <p style={{ color: 'white' }}>Address</p>
                <p style={{ color: 'white' }}>Phone Number</p>
                <p style={{ color: 'white' }}>City</p>
            </div>
        </div>

    );
}

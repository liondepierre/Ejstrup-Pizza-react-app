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
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h1>My Website Title</h1>
                    <p>Address: 123 Main St</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>City: Seattle</p>
                </div>
            </div>
        </div>

    );
}

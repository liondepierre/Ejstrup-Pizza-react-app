import * as React from 'react';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);


    return (
        <div>
            <div>
                <NavBar />
                   
            </div>
        </div>

    );
}

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
                <div style={{ marginTop: "1%", display: "flex", justifyContent: "center", alignSelf: "flex-end" }}>
                    <img style={{ width: "20%", height: "15%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />

                    <RestaurantImage />
                    <img style={{ width: "20%", height: "15%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />

                </div>
            </div>
        </div>

    );
}

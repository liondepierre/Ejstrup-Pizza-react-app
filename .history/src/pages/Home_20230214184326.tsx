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
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "flex-end" }}>
                        {/* <img style={{ width: "40%", height: "17%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" /> */}
                    </div>
                    <RestaurantImage />
                </div>
            </div>
        </div>

    );
}
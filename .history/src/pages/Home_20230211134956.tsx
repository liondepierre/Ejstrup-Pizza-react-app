import * as React from 'react';
import EliteSmiley from '../components/EliteSmiley';
import NavBar from '../components/NavBar';
import RestaurantImage from '../components/RestaurantImage';

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    return (
        <div style={}>
            <div>
                <NavBar />
                <div style={{ display: "flex", justifyContent: "center", alignSelf: "flex-end" }}>
                    <RestaurantImage />
                </div>
            </div>
            <div>
                <EliteSmiley width='450px' height='150px' />
            </div>
        </div>

    );
}
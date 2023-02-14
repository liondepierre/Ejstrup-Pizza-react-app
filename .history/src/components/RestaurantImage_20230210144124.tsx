import * as React from 'react';
import restaurantImage from '../assets/img/restuaruantImage.jpg'

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    return (
        <div>
            <img src={restaurantImage} alt='restuarant' />
        </div>
    );
}

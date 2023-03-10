import React from 'react';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
  
    return (
        
        <div className={styles.imageContainer}>
            <div>
                <img className={styles.image} src={restaurantImage} alt='restuarant' />
            </div>

        </div>

    );
}

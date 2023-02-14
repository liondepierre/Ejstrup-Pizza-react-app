import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    return (
        <div>
            <img className={styles.restaurantImage} 
            src={restaurantImage} alt='restuarant' />
        </div>
    );
}

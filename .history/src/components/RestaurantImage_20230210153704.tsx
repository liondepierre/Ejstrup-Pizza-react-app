import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';
import EliteSmiley from './EliteSmiley';

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} src={restaurantImage} alt='restuarant' />
            <EliteSmiley />
        </div>
    );
}

import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';
import EliteSmiley from './EliteSmiley';

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.image}>
                <img className={styles.image} src={restaurantImage} alt='restuarant' />
            </div>
            <div className={styles.eliteSmileyImage}>
                <EliteSmiley width='400px' height='150px'  />
            </div>
        </div>
    );
}

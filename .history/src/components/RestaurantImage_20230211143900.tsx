import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    return (
        <div>

            <div className={styles.imageContainer}>

                <div className={styles.image}>
                    <img className={styles.image} src={restaurantImage} alt='restuarant' />
                </div>

            </div>
        </div>

    );
}
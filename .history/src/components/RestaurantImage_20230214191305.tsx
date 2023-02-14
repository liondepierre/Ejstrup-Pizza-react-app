import restaurantImage from '../assets/img/restuaruantImage.jpg'
import styles from '../components/RestaurantImage.module.css';

export interface IRestaurantImageProps {
}

export default function RestaurantImage(props: IRestaurantImageProps) {
    const overlayStyles = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)'
      };
      
    return (
        
        <div className={styles.imageContainer}>
            <div>
                <img className={styles.image} src={restaurantImage} alt='restuarant' />
            </div>

        </div>

    );
}

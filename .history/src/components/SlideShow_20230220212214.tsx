import styles from '../components/SlideShow.module.css';
import test from '../assets/img/slideshowImages/foodImage.jpg'
import { IPhoto } from '../models/IPhoto';
import rightIcon from '../assets/img/ChevronRight.svg';
import leftIcon from '../assets/img/ChevronLeft.svg';

export interface ISlideShowProps {
    // photos: IPhoto[];
    // currentIndex: number;
}

const photos: IPhoto[] = [
    {
        path: "../assets/img/slideshowImages/foodImage.jpg",
        title: "foodImage"
    },
    {
        path: "../assets/img/slideshowImages/menucard.jpg",
        title: "menuCard"
    },
    {
        path: "../assets/img/slideshowImages/restaurantImage.jpg",
        title: "restaurantImage"
    },
]

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div className={styles.slideShowContainer}>
            <img className={styles.leftArrow} src={leftIcon} alt="gå til venstre" />
            <div style={
                {
                    display: "block",
                    objectFit: "cover",
                    height: "10%",
                    width: "10%",
                    backgroundImage: `url(${photos[0].path})`
                }} />
            <img className={styles.rightArrow} src={rightIcon} alt="gå til højre" />

        </div>
    );
}

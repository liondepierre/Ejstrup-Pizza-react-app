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
        path: "src/assets/img/slideshowImages/foodImage.jpg",
        title: "foodImage"
    },
    {
        path: "src/assets/img/slideshowImages/menucard.jpg",
        title: "menuCard"
    },
    {
        path: "src/assets/img/slideshowImages/restaurantImage.jpg",
        title: "restaurantImage"
    },
]

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div className={styles.slideShowContainer}>
            <img className={styles.leftArrow} src={leftIcon} alt="gå til venstre"/>
            <div style={
                { display: "block", 
                objectFit: "cover", 
                height: "100%", 
                width: "100%", 
                backgroundImage: `url(${photos[0]})` }}/>
            <img className={styles.rightArrow} src={rightIcon} alt="gå til højre"/>

        </div>
    );
}

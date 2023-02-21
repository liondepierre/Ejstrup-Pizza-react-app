import React from 'react';
import styles from '../components/SlideShow.module.css';
import test from '../assets/img/slideshowImages/foodImage.jpg'
import { IPhoto } from '../models/IPhoto';
import rightIcon from '../assets/img/ChevronRight.svg';
import leftIcon from '../assets/img/ChevronLeft.svg';

export interface ISlideShowProps {
    photo: IPhoto[];
}

export default function SlideShow(props: ISlideShowProps) {
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);


    const k = () => {
        console.log(setCurrentIndex(1))   
    }
        
    return (
        <div className={styles.slideShowContainer}>
            <img className={styles.leftArrow} src={leftIcon} alt="gå til venstre" />
            <div style={
                {
                    display: "block",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${props.photo[props.currentIndex].path})`
                }} />
            <img onClick={() => k()} className={styles.rightArrow} src={rightIcon} alt="gå til højre" />

        </div>
    );
}

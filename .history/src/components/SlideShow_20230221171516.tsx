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


    const next = () => {
        setCurrentIndex(val => val + 1)
        if (currentIndex === props.photo.length - 1) {
            setCurrentIndex(0)
        }
    }

    const prev = () => {
        if (currentIndex > 0  ) {
            setCurrentIndex(val => val - 1);
        } if (currentIndex === 0) {
            setCurrentIndex(3)
        }
    }

    return (
        <div className={styles.slideShowContainer}>
            <img onClick={() => prev()} className={styles.leftArrow}
                src={leftIcon} alt="gå til venstre" />
            <div style={
                {
                    display: "block",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${props.photo[currentIndex].path})`
                }} />
            <img onClick={() => next()} className={styles.rightArrow}
                src={rightIcon} alt="gå til højre" />

        </div>
    );
}

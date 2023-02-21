import * as React from 'react';
import test from '../assets/img/slideshowImages/foodImage.jpg'
import { IPhotos } from '../models/IPhotos';
import rightIcon from '../assets/img/DoubleChevronRight8.svg';
import leftIcon from '../assets/img/DoubleChevronLeft8.svg';

export interface ISlideShowProps {
    // photos: IPhotos[];
    // currentIndex: number;
}

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", gap: "5%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <img style={{ width: "10%", height: "10%"}} src={leftIcon} alt="gå til venstre"/>
            <div style={{ objectFit: "cover", height: "100%", width: "100%", backgroundImage: `url(${test})` }}></div>
            <img style={{ width: "10%", height: "10%"}} src={rightIcon} alt="gå til højre"/>

        </div>
    );
}

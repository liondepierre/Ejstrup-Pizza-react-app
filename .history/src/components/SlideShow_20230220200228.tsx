import * as React from 'react';
import test from '../assets/img/slideshowImages/foodImage.jpg'
import { IPhotos } from '../models/IPhotos';
import rightIcon from '../assets/img/ChevronRight.svg';
import leftIcon from '../assets/img/ChevronLeft.svg';

export interface ISlideShowProps {
    // photos: IPhotos[];
    // currentIndex: number;
}

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", gap: "5%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <img style={{ bottom: "1", left: "0", position: "absolute", width: "10%", height: "10%"}} src={leftIcon} alt="gå til venstre"/>
            <div style={{ display: "block", objectFit: "cover", height: "100%", width: "100%", backgroundImage: `url(${test})` }}></div>
            <img style={{ backgroundColor: "white", fill: "cyan", bottom: "1", right: "0", position: "absolute", width: "10%", height: "10%"}} src={rightIcon} alt="gå til højre"/>

        </div>
    );
}

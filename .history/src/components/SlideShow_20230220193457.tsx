import * as React from 'react';
import test from '../assets/img/slideshowImages/foodImage.jpg'
import { IPhotos } from '../models/IPhotos';

export interface ISlideShowProps {
    // photos: IPhotos[];
    // currentIndex: number;
}

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", gap: "5%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <button>left</button>
            <div style={{height: "5%", width: "5%", backgroundImage: `url(${test})` }}></div>
            <button>Right</button>
        </div>
    );
}

import * as React from 'react';
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import { IPhotos } from '../models/IPhotos';

export interface ISlideShowProps {
    photos: IPhotos[];
    currentIndex?: number;
}

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div style={{ display: "flex", gap: "5%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <button>left</button>
            <div style={{}}>
                {props.photos.map((value) => {
                    return (
                        <div style={{backgroundImage: `url(${props.photos[props.currentIndex].path})`}}>

                        </div>
                    )
                })}
            </div>
            <button>Right</button>
        </div>
    );
}

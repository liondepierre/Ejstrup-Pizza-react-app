import * as React from 'react';
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import { IPhotos } from '../models/IPhotos';

export interface ISlideShowProps {
    photos: IPhotos[];
}

export default function SlideShow(props: ISlideShowProps) {
    return (
        <div style={{ display: "flex", gap: "5%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <button>left</button>
            <div style={{}}>
                {props.photos.map((value) => {
                    return (
                        <img src={value.path} alt={value.title}/>
                    )
                })}
            </div>
            <button>Right</button>
        </div>
    );
}

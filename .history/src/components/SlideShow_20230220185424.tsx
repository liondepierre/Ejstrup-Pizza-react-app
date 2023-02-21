import * as React from 'react';
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import { IPhotos } from '../models/IPhotos';

export interface ISlideShowProps {
    photos: IPhotos[];
}

export default function SlideShow (props: ISlideShowProps) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <button>left</button>
        <h1>images</h1>
        <button>Right</button>
    </div>
  );
}

import * as React from 'react';
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import { IPhotos } from '../models/IPhotos';

export interface ISlideShowProps {
    photos: IPhotos[];
}

export default function SlideShow (props: ISlideShowProps) {
  return (
    <div>
        <h1>Insert slider</h1>
    </div>
  );
}

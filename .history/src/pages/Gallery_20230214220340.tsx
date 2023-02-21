import * as React from 'react';
import NavBar from '../components/NavBar';

export interface IGalleryProps {
}

export default function Gallery(props: IGalleryProps) {
    return (
        <div>
            <NavBar />
            <div className="overlay-container">
                <div className="overlay">
                    <h1>Website Title</h1>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>City</p>
                </div>
                <img src="your-image.jpg" alt="your image"/>
            </div>

        </div>
    );
}

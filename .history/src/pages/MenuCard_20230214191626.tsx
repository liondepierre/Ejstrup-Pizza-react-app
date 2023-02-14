import NavBar from '../components/NavBar';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const overlayStyles = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)'
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.5)'
        }}>

        </div>
    );
}

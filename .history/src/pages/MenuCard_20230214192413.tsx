import NavBar from '../components/NavBar';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const styles = {
        overlayContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
        },
        overlay: {
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
        }}
        >
        <NavBar />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            >
                afsaasd
            </div>

        </div>

    );
}

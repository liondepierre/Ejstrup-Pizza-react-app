import NavBar from '../components/NavBar';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <NavBar />
            <img style={{ width: "40%", height: "17%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />

            <img style={{marginRight: "20px", width: "90%", height: "90%"}} src={restaurantImage} alt='restuarant' />

        </div>
    );
}

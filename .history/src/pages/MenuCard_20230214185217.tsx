import NavBar from '../components/NavBar';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <NavBar />
            <img style={{marginRight: "20px"}} src={restaurantImage} alt='restuarant' />
            <img style={{ width: "40%", height: "17%" }} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />

        </div>
    );
}

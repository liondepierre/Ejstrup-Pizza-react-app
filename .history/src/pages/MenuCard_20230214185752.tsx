import NavBar from '../components/NavBar';
import restaurantImage from '../assets/img/restuaruantImage.jpg'
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <NavBar />
            <img style={{width: "500px", height: "500px", marginRight: "20px"}} src={eliteSmiley} alt="Smiley - Fødevarestyrelsen" />
            <img style={{width: "200px", height: "200px"}} src={restaurantImage} alt='restuarant' />

        </div>
    );
}

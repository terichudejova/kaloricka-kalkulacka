import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card"
import "./CardsContainer.css"



export default function CardsContainer() {
    return (
        <Carousel className='carousel-container'>
            <Carousel.Item className='carousel-item'>
                <Card
                    src={"images/meat.jpg"}
                    title={"BÍLKOVINY"}
                    text={"1 g = 4 kcal \nMaso, uzeniny, vejce, tvaroh, cottage, proteinové produkty, sýry..."}
                />
            </Carousel.Item>
            <Carousel.Item className='card-item'>
                <Card
                    src={"images/nuts.jpg"}
                    title={"TUKY"}
                    text={"1 g = 9 kcal \nOřechy, avokádo, ryby, máslo, mléčné výrobky..."}
                />
            </Carousel.Item>
            <Carousel.Item className='card-item'>
                <Card
                    src={"images/potatoes.jpg"}
                    title={"SACHARIDY"}
                    text={"1 g = 4 kcal \nVločky, rýže, brambory, těstoviny, pečivo, ovoce, zelenina, luštěniny..."}
                />
            </Carousel.Item>
        </Carousel>
    );
}
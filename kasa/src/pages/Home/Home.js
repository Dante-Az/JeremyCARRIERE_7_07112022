import { useEffect, useState } from 'react';
import image from '../../assets/IMG.png'
import Banner from '../../components/Banner/Banner'
import Cards from '../../components/Cards/Cards'
import styles from './Home.module.css'
export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("../logement.json")
        .then(res => res.json())
        .then(body => setData(body));
      }, []);

    const cardsElements = data.map(card => {
        console.log(card.id)
        return <Cards 
        key={card.id}
        id={card.id}
        title={card.title}
        cover={card.cover}
        />
      })
    return(
        <div className={styles.home}>
                <Banner
                image = {image}
                imageAlt ="vue sur des falaises au bord de la mer"
                text="Chez vous, partout et ailleurs"
                />
            <div className={styles.cardsContainer}>
                {cardsElements}
            </div>
        </div>
    )
}
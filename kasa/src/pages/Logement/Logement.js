import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Location from '../../components/Location/Location';
import Slideshow from '../../components/Slideshow/Slideshow';
import Host from '../../components/Host/Host';
import TagsMap from '../../components/Tags/TagsMap';
import RatingArray from '../../components/Rating/RatingArray';
import styles from './Logement.module.css';
export default function Logement() {
 
    const params = useParams();
    const [logements, setLogements] = useState(null);
    const [logement, setLogement] = useState({});
    const [tags, setTags] = useState([]);
    const [rating, setRating] = useState ("");
    const [host, setHost] = useState ({});
    const [pictures, setPictures] = useState([]);
    const [description, setDescription] = useState("");
    const [equipments, setEquipments] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        fetch("../logement.json")
        .then(res => res.json())
        .then(body => setLogements(body));
    }, []);

    useEffect(() => {
        if (logements === null){
        return;
        }

    const logement = logements.find((element) => element.id === params.id);
        if(logement){
        setLogement(logement);
        setTags(logement.tags);
        setRating(logement.rating)
        setHost(logement.host);
        setPictures(logement.pictures);
        setDescription(logement.description);
        setEquipments(logement.equipments);


        } else {
        navigate('*', { replace: true });
        }
    }, [logements, params.id, navigate]);
    

    return(
        <div>
            <div className={styles.container}>
                <Slideshow pictures={pictures} />
            </div>
            <div className={styles.mainBlock}>
                <div className={styles.locationTagContainer}>
                    <Location 
                    title = {logement.title}
                    location = {logement.location}
                    />
                    <div className={styles.tagsContainer}>
                        {/* {thisLogement.tags.map(tagList => (
                        <Tags tag = {tagList} />))} */}
                        <TagsMap tag = {tags}/>
                    </div>
                </div>
                <div className={styles.hostRatingBlock}>
                    <Host
                        name = {host.name}
                        picture = {host.picture} 
                        />
                        <div className={styles.starBlock}>
                        <RatingArray
                        rating = {rating}
                        />
                        </div>
                </div>
            </div>    
            <div className={styles.dropdownBlock}>
                <Dropdown 
                id = {params.id}
                title = "Description"
                content = {description}
                />
                <Dropdown 
                id = {params.id}
                title = "Equipements"
                array = {equipments}
                />
            </div>    
        </div>
    )
}
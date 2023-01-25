import styles from './Slideshow.module.css'
import { ReactComponent as Icon } from '../../assets/sliderArrow.svg';
import { useState } from "react";

const ImageSlider = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(pictures)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };

    const indexNumber = currentIndex + 1;

    return (
        <div className={styles.container}>
            {pictures.length > 1 ? (
                <>
                    <Icon className={`${styles.sliderArrow} ${styles.leftArrow}`} onClick={goToPrevious}/>
                    <Icon className={`${styles.sliderArrow} ${styles.rightArrow}`} onClick={goToNext}/>
                </>
            ) : ""}
            
            <div className={styles.slider}
                style={{ backgroundImage: `url(${pictures[currentIndex]})`}}>
            </div>
            <p className={styles.slideNumber}>{[indexNumber]}/{[pictures.length]}</p>
        </div>
    
    );
};

export default ImageSlider;
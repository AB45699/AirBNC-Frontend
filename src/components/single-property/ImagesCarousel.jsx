import useEmblaCarousel from 'embla-carousel-react';
import {useState} from 'react'; 
import './SingleProperty.css';

function ImagesCarousel( {property} ) {
    const [emblaRef] = useEmblaCarousel();
    const propertyImages = property.images;
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((currentCounter) => {
            if (currentCounter === propertyImages.length - 1) {
                return 0
            } else {
                return currentCounter +=1
            }
        });
    }; 

    function decrementCounter() {
        setCounter((currentCounter) => {
            if (currentCounter === 0) {
                return (propertyImages.length - 1)
            } else {
                return currentCounter -=1
            }
        });
    }

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide"><img className="single-property-image" src={propertyImages[counter]}/></div>
                </div>
            </div>

            <button className="embla__prev" onClick={decrementCounter}>{`<`}</button>
            <button className="embla__next" onClick={incrementCounter}>{`>`}</button>
        </div>
    )
};

export default ImagesCarousel;
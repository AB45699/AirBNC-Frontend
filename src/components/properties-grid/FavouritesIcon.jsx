import emptyHeart from '../../assets/empty-heart.png';
import './PropertiesGrid.css';

function FavouritesIcon( {property} ) {
    return (
        <button type="button" className="favourite-button">
            <p className="num-of-faves"> {property.favourites}</p>
            <img className="empty-heart" src={emptyHeart} alt="empty heart"/>
        </button>
    )
};

export default FavouritesIcon;
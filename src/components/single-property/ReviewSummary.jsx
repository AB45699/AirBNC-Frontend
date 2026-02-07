import GoldStarIcon from './GoldStarIcon.jsx';

function ReviewSummary( {property} ) {
    const {avg_rating: averageRating} = property;

    function repeatStar() {
        const repeatedStars = [];

        for (let i=0; i < Math.round(averageRating); i++) {
            repeatedStars.push(<GoldStarIcon key={`gold-star${i}`}/>)
        };

        return repeatedStars;
    };

    return (
        <div className="single-property-details__review"> 
        { property.review_count !== null ? (
            <>
                <div className="single-property-details__review-average">
                    {averageRating}
                    <div className="single-property-details__stars">{repeatStar()}</div>
                </div>
                <div className="single-property-details__review-count">
                    {property.review_count}
                    <div className="single-property-details__count-text">
                        Reviews
                    </div>
                </div> 
            </>) : (

            <p>No reviews yet!</p> 

            )
        }
        
        </div>
    )
}

export default ReviewSummary;
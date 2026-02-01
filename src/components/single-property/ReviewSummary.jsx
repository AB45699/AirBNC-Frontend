import GoldStar from '../../assets/gold-star-icon.png';

function ReviewSummary( {property} ) {
    return (
        <div className="single-property-details__review"> 
        { property.review_count !== "0" ? (
            <>
                <div className="single-property-details__review-average">
                    {property.avg_rating}
                    {<img className="single-property-details__gold-star" src={GoldStar} alt="gold star image"/>}
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
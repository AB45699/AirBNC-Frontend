function HostCard( {property} ) {
    return (
        <div className="single-property-details__host">
            <img className="single-property-details__host-avatar" src={property.host_avatar} alt="host avatar image"/>
            <p className="single-property-details__host-name"> Hosted by {property.host} </p>
        </div>
    )
}

export default HostCard;
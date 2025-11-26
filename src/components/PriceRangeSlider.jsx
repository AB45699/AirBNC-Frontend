import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react';

function PriceRangeSlider({searchParams, setSearchParams, priceQuery, setPriceQuery}) {
    const [priceValues, setPriceValues] = useState([0, 550])

    const handleChange = (event, newValue) => {
        setPriceValues(newValue)
        setPriceQuery(priceValues)
    }

    return (
        <div className="price-range-slider-container">
        <Box sx={{width: 250}}>
            <Slider
                value={priceValues}
                onChange={handleChange}
                min={0}
                max={550}
                valueLabelDisplay='on'/>
        </Box>
        </div>
    )
}

export default PriceRangeSlider;
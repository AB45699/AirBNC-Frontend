import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';

function SortByDropdown({searchParams, setSearchParams}) {
    const [sortValue, setSortValue] = useState("Most favourited");

    const handleChange = (event) => {
        setSortValue(event.target.value)
    };

    const setSortOrder = (sortOrder, sortBy) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("order", sortOrder);
        newParams.set("sort", sortBy)
        setSearchParams(newParams)
    }

    console.log(searchParams.get("order"))

    return (
        
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-by-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={sortValue}
          label="sort-by"
          onChange={handleChange}
        >
          <MenuItem value={"Most favourited"} onClick={() => setSortOrder("desc", "favourites")}>Most favourited</MenuItem>
          <MenuItem value={"Least favourited"} onClick={() => setSortOrder("asc", "favourites")}>Least favourited</MenuItem>
           <MenuItem value={"Price low"} onClick={() => setSortOrder("asc", "price_per_night")}>Price: Low → High</MenuItem>
           <MenuItem value={"Price high"} onClick={() => setSortOrder("desc", "price_per_night")}>Price:  High → Low</MenuItem>
           <MenuItem value={"Most popular"} onClick={() => setSortOrder("desc", "popularity")}>Most popular</MenuItem>
           <MenuItem value={"Least popular"} onClick={() => setSortOrder("asc", "popularity")}>Least popular </MenuItem>

        </Select>
      </FormControl>
    
    )
}; 

export default SortByDropdown;
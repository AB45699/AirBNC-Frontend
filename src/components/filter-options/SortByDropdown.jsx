import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';
import './SortByDropdown.css';

function SortByDropdown({searchParams, setSearchParams}) {
    const [sortValue, setSortValue] = useState("Most favourited");

    const handleChange = (event) => {
        setSortValue(event.target.value)
    };

    const setSortOrder = (sortOrder, sortBy) => {
        const newParams = new URLSearchParams(searchParams);

        newParams.set("order", sortOrder);
        newParams.set("sort", sortBy);
        setSearchParams(newParams);
    };

    const sortOptions = [
      { label: "Most favourited", value: "Most favourited", key: "most_favourited", order: "desc", sortBy: "favourites" }, 
      { label: "Least favourited", value: "Least favourited", key: "least_favourited", order: "asc", sortBy: "favourites" }, 
      { label: "Price: Low → High", value: "Price low", key: "price_low", order: "asc", sortBy: "price_per_night" },
      { label: "Price: High → Low", value: "Price high", key: "price_high", order: "desc", sortBy: "price_per_night" },
      { label: "Most popular", value: "Most popular", key: "most_popular", order: "desc", sortBy: "popularity" },
      { label: "Least popular", value: "Least popular", key: "least_popular", order: "asc", sortBy: "popularity" },
    ];

    return (
      <FormControl sx={{ width: 100 }} size="small">
        <InputLabel id="sort-by-select-label">Sort</InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={sortValue}
          label="sort-by"
          onChange={handleChange}
        >

          {sortOptions.map((sortOption)=>(
            <MenuItem
              key={sortOption.key}
              value={sortOption.value}
              onClick={()=>setSortOrder(sortOption.order, sortOption.sortBy)}
            >
            {sortOption.label}
            </MenuItem>
          ))}
  
        </Select>
      </FormControl>
    
    )
}; 

export default SortByDropdown;
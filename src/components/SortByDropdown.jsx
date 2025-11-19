import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';

function SortByDropdown() {
    const [sortValue, setSortValue] = useState("Most favourited");

    const handleChange = (event) => {
        setSortValue(event.target.value)
    };

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
          <MenuItem value={"Most favourited"}>Most favourited</MenuItem>
          <MenuItem value={"Least favourited"}>Least favourited</MenuItem>
           <MenuItem value={"Price low"}>Price: Low → High</MenuItem>
           <MenuItem value={"Price high"}>Price:  High → Low</MenuItem>
           <MenuItem value={"Most popular"}>Most popular</MenuItem>
           <MenuItem value={"Least popular"}>Least popular</MenuItem>

        </Select>
      </FormControl>

        
        // <select>
        //     <option>Most favourited</option>
        //     <option>Least favourited</option>
        //     <option>Price: Low → High</option>
        //     <option>Price: High → Low</option>
        //     <option>Most popular</option>
        //     <option>Least popular</option>
        // </select>
    
    )
}; 

export default SortByDropdown;
function SortByDropdown() {
    return (
        <>
        <label for="sort-by">Filter</label>
       <select id="sort-by" onClick={console.log("hello")}>
        <option>action 1</option>
       </select>
       </>
    )
}; 

export default SortByDropdown;
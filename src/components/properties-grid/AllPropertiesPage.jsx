import PropertiesGrid from "./PropertiesGrid.jsx";

function AllPropertiesPage( {searchParams, setSearchParams} ) {
    return (
        <PropertiesGrid searchParams={searchParams} setSearchParams={setSearchParams}/>
    )
};

export default AllPropertiesPage;
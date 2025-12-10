import PropertiesGrid from "./PropertiesGrid.jsx";
import { useSearchParams } from 'react-router-dom';
import Header from '../filter-options/header/Header.jsx';

function AllPropertiesPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
        <Header searchParams={searchParams} setSearchParams={setSearchParams}/>
        <PropertiesGrid searchParams={searchParams}/>
        </>
    )
};

export default AllPropertiesPage;
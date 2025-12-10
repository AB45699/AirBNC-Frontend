import './App.css';
import Header from './components/filter-options/header/Header.jsx';
import AllPropertiesPage from './components/properties-grid/AllPropertiesPage.jsx';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <>
    <Header searchParams={searchParams} setSearchParams={setSearchParams}/>
    <AllPropertiesPage searchParams={searchParams} setSearchParams={setSearchParams}/>
    </>
    
  )
}

export default App

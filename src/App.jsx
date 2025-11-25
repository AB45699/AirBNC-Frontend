import './App.css';
import Header from './components/Header.jsx';
import AllPropertiesPage from './components/AllPropertiesPage.jsx';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("initially", searchParams.get("order"))
  return (
    <>
    <Header searchParams={searchParams} setSearchParams={setSearchParams}/>
    <AllPropertiesPage searchParams={searchParams} setSearchParams={setSearchParams}/>
    </>
    
  )
}

export default App

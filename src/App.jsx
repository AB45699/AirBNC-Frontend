import AllPropertiesPage from './components/properties-grid/AllPropertiesPage.jsx';
import { Routes, Route } from 'react-router-dom'; 
import SinglePropertyPage from './components/single-property/SinglePropertyPage.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AllPropertiesPage/>}/>
      <Route path="/properties/:property_id" element={ <SinglePropertyPage />}/>
    </Routes>
    </>
  )
}

export default App

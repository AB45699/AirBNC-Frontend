import '../css/Header.css';
import airbnb_logo from '../assets/airbnb_logo.png';
import SearchBar from './SearchBar.jsx';

function Header() {
    return (
        <header className="header">
            <img className="logo" src={airbnb_logo} alt="logo"/>
            <SearchBar />
        </header>
    )
};

export default Header;
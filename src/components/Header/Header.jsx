import Logo from '../../assets/images/netflix-logo-png-large.png';
import Search from '../../assets/images/magnifying-glass-3-128.png';
import '../Header/Header.scss';
import { useState } from 'react';

function Header() {

// intialize State for searchbar 
const [searchInput, setSearchInput] = useState("");

    return (
        <nav className='nav'>
            <div className='nav__wrapper'>
                <img className='nav__logo' src={Logo} alt='Netflix logo'></img>
                <ul className='nav__menu'>
                    <li className='nav__links'>Home</li>
                    <li className='nav__links'>TV Shows</li>
                    <li className='nav__links'>Movies</li>
                    <li className='nav__links'>New & Popular</li>
                    <li className='nav__links'>My List</li>
                </ul>
            </div>
          
            <div className='nav__wrapper'>
                <img className='nav__search-icon' src={Search} alt='search bar icon'></img>
                <input
                    className='nav__search-focused'
                    type="text"
                    placeholder="Titles, people, genre"
                    value={searchInput} />
            </div>

        </nav>
    )
}

export default Header;
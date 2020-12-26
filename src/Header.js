import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut();
        }
    }

    const openNav = () => {
        document.querySelector(".nav-container").style.transform = "translateX(0%)"
    }

    const closeNav = () => {
        document.querySelector(".nav-container").style.transform = "translateX(-200%)"
    }
    return (
        <nav className="header">
            <div className="header__nav-mobile">
                <MenuIcon className="menuIcon" onClick={openNav}/>
                <Link to={!user && "/login"} className="link">
                    <span className="SignIn" onClick={login}>{user ? "Sign Out" : "Sign In"}</span>
                </Link>
                <div className="nav-container">
                    <CloseIcon className="closeIcon" onClick={closeNav}/>
                    <Link to={!user && "/login"} className="link">
                        <div className="header__option-mobile hello">
                            <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                        </div>
                    </Link>
                    <Link to="/" className="link" onClick={closeNav}>
                        <div className="header__option-mobile">  
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div> 
                    </Link>
                    <Link to="/" className="link" onClick={closeNav}>
                        <div className="header__option-mobile">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo"> Prime</span>
                        </div>
                    </Link>
                </div>
            </div>
            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo"/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link desktop-link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link desktop-link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link desktop-link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link header__basket">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header

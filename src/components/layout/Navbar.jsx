import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div className="image">
                <div className="content">
                    <div class="navigation">
                        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

                        <label for="navi-toggle" class="navigation__button">
                            <span class="navigation__icon">&nbsp;</span>
                        </label>

                        <div class="navigation__background">&nbsp;</div>

                        <nav class="navigation__nav">
                            <ul class="navigation__list">
                                <li class="navigation__item"><Link to='/' class="navigation__link">Home</Link></li>
                                <li class="navigation__item"><Link to='/about' class="navigation__link">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="content2">
                        <span class="logo"><i class='fab fa-github'></i></span>
                        <span class="text">Github Finder</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;

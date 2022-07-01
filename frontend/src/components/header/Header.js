import React from "react";
import Home from "../../pages/Home";
import CatalogGrid from "../../pages/CatalogGrid";
import { Link } from "react-router-dom";


const Header = () => {
    return (
            <header class="page-header">
                <div class="rd-navbar-wrap">
                    <nav
                        class="rd-navbar rd-navbar_transparent"
                        data-layout="rd-navbar-fixed"
                        data-sm-layout="rd-navbar-fixed"
                        data-sm-device-layout="rd-navbar-fixed"
                        data-md-layout="rd-navbar-fixed"
                        data-md-device-layout="rd-navbar-fixed"
                        data-lg-layout="rd-navbar-static"
                        data-lg-device-layout="rd-navbar-fixed"
                        data-xl-device-layout="rd-navbar-static"
                        data-xl-layout="rd-navbar-static"
                        data-stick-up-clone="false"
                        data-sm-stick-up="true"
                        data-md-stick-up="true"
                        data-lg-stick-up="true"
                        data-xl-stick-up="true"
                        data-xxl-stick-up="true"
                        data-lg-stick-up-offset="120px"
                        data-xl-stick-up-offset="35px"
                        data-xxl-stick-up-offset="35px"
                        data-body-class="rd-navbar-absolute"
                    >
                        <div class="rd-navbar-top-panel">
                            <div class="rd-navbar-top-panel__main">
                                <div
                                    class="rd-navbar-top-panel__toggle rd-navbar-fixed__element-1 rd-navbar-static--hidden"
                                    data-rd-navbar-toggle=".rd-navbar-top-panel__main"
                                >
                                    <span></span>
                                </div>
                                <div class="rd-navbar-top-panel__content">
                                    <ul class="rd-navbar-items-list">
                                        <li>
                                            <ul className="list-inline-xxs">
                                                <li>
                                                    <a
                                                        href="head"
                                                        data-toggle="modal"
                                                        data-target="#modalLogin"
                                                    >
                                                        Sign In
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="head"
                                                        data-toggle="modal"
                                                        data-target="#modalRegister"
                                                    >
                                                        Create an Account
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="list-inline-xxs">
                                                <li>
                                                    <a
                                                        className="icon icon-xxs icon-gray-4 fa fa-facebook"
                                                        href="home-commercial.html"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-xxs icon-gray-4 fa fa-twitter"
                                                        href="home-commercial.html"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-xxs icon-gray-4 fa fa-youtube"
                                                        href="home-commercial.html"
                                                    ></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rd-navbar-inner rd-navbar-search-wrap">
                            <div className="rd-navbar-panel rd-navbar-search_collapsable">
                                <button
                                    className="rd-navbar-toggle"
                                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                                >
                                    <span></span>
                                </button>

                                <div className="rd-navbar-brand">
                                    <a className="brand-name" href="index.html">
                                        <img
                                            src="assets/images/logo-108x47.png"
                                            alt=""
                                            width="108"
                                            height="47"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="rd-navbar-nav-wrap rd-navbar-search_not-collapsable">
                                <ul className="rd-navbar-items-list rd-navbar-search_collapsable">
                                    <li>
                                        <button
                                            className="rd-navbar-search__toggle rd-navbar-fixed--hidden"
                                            data-rd-navbar-toggle=".rd-navbar-search-wrap"
                                        ></button>
                                    </li>
                                    <li className="rd-navbar-nav-wrap__shop">
                                        <a
                                            className="icon icon-md linear-icon-cart link-primary"
                                            href="cart.html"
                                        ></a>
                                    </li>
                                </ul>

                                <div className="rd-navbar-search rd-navbar-search_toggled rd-navbar-search_not-collapsable">
                                    <form
                                        className="rd-search"
                                        action="search-results.html"
                                        method="GET"
                                        data-search-live="rd-search-results-live"
                                    >
                                        <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                id="rd-navbar-search-form-input"
                                                type="text"
                                                name="s"
                                                autocomplete="off"
                                            />
                                            <label
                                                className="form-label"
                                                for="rd-navbar-search-form-input"
                                            >
                                                Enter keyword
                                            </label>
                                            <div
                                                className="rd-search-results-live"
                                                id="rd-search-results-live"
                                            ></div>
                                        </div>
                                        <button
                                            className="rd-search__submit"
                                            type="submit"
                                        ></button>
                                    </form>
                                    <div className="rd-navbar-fixed--hidden">
                                        <button
                                            className="rd-navbar-search__toggle"
                                            data-custom-toggle=".rd-navbar-search-wrap"
                                            data-custom-toggle-disable-on-blur="true"
                                        ></button>
                                    </div>
                                </div>
                                <div className="rd-navbar-search_collapsable">
                                    <ul className="rd-navbar-nav">
                                        <li className="active">
                                            <a href="#">Home</a> 
                                        </li>
                                        <li>
                                        <Link to="/cataloggrid">Catalog</Link>
                                            <ul className="rd-navbar-dropdown">
                                                <li>
                                                <Link to="/cataloglist">Catalog List</Link>
                                                </li>
                                                <li>
                                                <Link to="/cataloggrid">Catalog Grid</Link>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    );
};

export default Header;

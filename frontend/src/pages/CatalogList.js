import React from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const CatalogList = () => {
    return (
        <React.Fragment>
            <div class="page">
                <div class="preloader">
                    <div class="cssload-container">
                        <div class="cssload-speeding-wheel"></div>
                    </div>
                </div>
                <section class="breadcrumbs-custom">
                    <div class="container">
                        <div class="breadcrumbs-custom__inner">
                            <p class="breadcrumbs-custom__title">Catalog List</p>
                            <ul class="breadcrumbs-custom__path">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#">Catalog</a></li>
                                <li class="active">Catalog List</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="section-md bg-default">
                    <div class="container">
                        <div class="row row-60 flex-lg-row-reverse">
                            <div class="col-lg-9 section-divided__main section-divided__main-left">
                                <section class="section-sm">
                                    <div class="filter-shop-box">
                                        <p>Showing 1–12 of 15 results</p>
                                        <div class="form-wrap">
                                            
                                            <select class="form-input select-filter" data-placeholder="Default sorting" data-minimum-results-for-search="Infinity">
                                                <option>Default sorting</option>
                                                <option value="2">Sort by popularity</option>
                                                <option value="3">Sort by average rating</option>
                                                <option value="4">Sort by newness</option>
                                                <option value="5">Sort by price: low to high</option>
                                                <option value="6">Sort by price: high to low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row justify-content-sm-center row-70">
                                        <div class="col-sm-12">
                                            <div class="product product-list unit flex-md-row unit-spacing-lg">
                                                <div class="unit__left product-img-wrap"><img src="assets/images/garda-square-sideboard-for-living-and-dining-room-by-dallagnese-418x560.jpg" alt="" width="418" height="560" />
                                                    <div class="product-label-wrap"><span class="featured">Featured</span></div>
                                                </div>
                                                <div class="unit__body product-caption">
                                                    <ul class="product-categories">
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Dining room</a></li>
                                                        <li><a href="#">Office</a></li>
                                                        <li><a href="#">Bedroom</a></li>
                                                    </ul>
                                                    <h5 class="product-title"><a href="single-product.html">GARDA SQUARE SIDEBOARD</a></h5>
                                                    <p class="product-price"><span>48</span>
                                                    </p>
                                                    <ul class="rating-list">
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                                    </ul>
                                                    <p class="product-text">This lovely collection features tight back &amp; seat cushions, and motion reclining mechanism for extra comfort.</p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md icon-gray linear-icon-cart"></span><span>Add to cart</span></a>
                                                    <div class="product-icon-wrap"><span class="icon icon-md linear-icon-heart" data-toggle="tooltip" data-original-title="Add to Wishlist"></span><span class="icon icon-md linear-icon-balance" data-toggle="tooltip" data-original-title="Add to Compare"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="product product-list unit flex-md-row unit-spacing-lg">
                                                <div class="unit__left product-img-wrap"><img src="assets/images/emma-chairs-and-table-for-kitchen-418x560.jpg" alt="" width="418" height="560" />
                                                    <div class="product-label-wrap"><span class="new">New</span></div>
                                                </div>
                                                <div class="unit__body product-caption">
                                                    <ul class="product-categories">
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Dining room</a></li>
                                                        <li><a href="#">Office</a></li>
                                                        <li><a href="#">Bedroom</a></li>
                                                    </ul>
                                                    <h5 class="product-title"><a href="single-product.html">Italian emma chairs and table wooden for kitchen</a></h5>
                                                    <p class="product-price"><span>69</span>
                                                    </p>
                                                    <ul class="rating-list">
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                                    </ul>
                                                    <p class="product-text">This lovely collection features tight back &amp; seat cushions, and motion reclining mechanism for extra comfort.</p><a class="button-gray-light-outline button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md icon-gray linear-icon-magic-wand"></span><span>Select options</span></a>
                                                    <div class="product-icon-wrap"><span class="icon icon-md linear-icon-heart" data-toggle="tooltip" data-original-title="Add to Wishlist"></span><span class="icon icon-md linear-icon-balance" data-toggle="tooltip" data-original-title="Add to Compare"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="product product-list unit flex-md-row unit-spacing-lg">
                                                <div class="unit__left product-img-wrap"><img src="assets/images/italian-furniture-contemporary-allumen-fixed-or-extendable-glass-top-table-by-sedit-2-418x560.jpg" alt="" width="418" height="560" />
                                                    <div class="product-label-wrap"><span class="sale">Sale</span></div>
                                                </div>
                                                <div class="unit__body product-caption">
                                                    <ul class="product-categories">
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Dining room</a></li>
                                                        <li><a href="#">Office</a></li>
                                                        <li><a href="#">Bedroom</a></li>
                                                    </ul>
                                                    <h5 class="product-title"><a href="single-product.html">Italian furniture contemporary allumen GLASS TABLE</a></h5>
                                                    <p class="product-price sale-price"><span>45</span><span>55</span>
                                                    </p>
                                                    <ul class="rating-list">
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                                    </ul>
                                                    <p class="product-text">This lovely collection features tight back &amp; seat cushions, and motion reclining mechanism for extra comfort.</p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md icon-gray linear-icon-cart"></span><span>Add to cart</span></a>
                                                    <div class="product-icon-wrap"><span class="icon icon-md linear-icon-heart" data-toggle="tooltip" data-original-title="Add to Wishlist"></span><span class="icon icon-md linear-icon-balance" data-toggle="tooltip" data-original-title="Add to Compare"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="product product-list unit flex-md-row unit-spacing-lg">
                                                <div class="unit__left product-img-wrap"><img src="assets/images/italian-furniture-contemporary-mix-steel-base-wooden-table-top-dining-table-by-sedit-2-418x560.jpg" alt="" width="418" height="560" />
                                                    <div class="product-label-wrap"><span></span></div>
                                                </div>
                                                <div class="unit__body product-caption">
                                                    <ul class="product-categories">
                                                        <li><a href="#">Living Room</a></li>
                                                        <li><a href="#">Dining room</a></li>
                                                        <li><a href="#">Office</a></li>
                                                        <li><a href="#">Bedroom</a></li>
                                                    </ul>
                                                    <h5 class="product-title"><a href="single-product.html">Italian furniture contemporary mix steel base WOODEN SET</a></h5>
                                                    <p class="product-price"><span>87</span>
                                                    </p>
                                                    <ul class="rating-list">
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                                    </ul>
                                                    <p class="product-text">This lovely collection features tight back &amp; seat cushions, and motion reclining mechanism for extra comfort.</p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md icon-gray linear-icon-cart"></span><span>Add to cart</span></a>
                                                    <div class="product-icon-wrap"><span class="icon icon-md linear-icon-heart" data-toggle="tooltip" data-original-title="Add to Wishlist"></span><span class="icon icon-md linear-icon-balance" data-toggle="tooltip" data-original-title="Add to Compare"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                
                                <section class="section-sm">
                                    
                                    <nav>
                                        <ul class="pagination-classic">
                                            <li class="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a class="icon linear-icon-arrow-right" href="#"></a></li>
                                        </ul>
                                    </nav>
                                </section>
                            </div>
                            <div class="col-lg-3 section-divided__aside section__aside-left">
                                
                                <section class="section-sm">
                                    <h5>Categories</h5>
                                    <ul class="small list">
                                        <li><a href="#">Kitchen</a></li>
                                        <li><a href="#">Office</a></li>
                                        <li><a href="#">Bedroom</a></li>
                                        <li><a href="#">Living Room</a></li>
                                    </ul>
                                </section>

                                
                                <section class="section-sm">
                                    <h5>Filter By Color</h5>
                                    <ul class="small list">
                                        <li><a href="#">Black (9)</a></li>
                                        <li><a href="#">Blue (3)</a></li>
                                        <li><a href="#">Brown (5)</a></li>
                                        <li><a href="#">Gray (7)</a></li>
                                        <li><a href="#">White (6)</a></li>
                                    </ul>
                                </section>

                                
                                <section class="section-sm">
                                    <h5>Filter By Price</h5>
                                    
                                    <div class="rd-range-wrap">
                                        <div class="rd-range-inner"><span>Price: </span><span class="rd-range-input-value-1"></span><span>—</span><span class="rd-range-input-value-2"></span></div>
                                        <div class="rd-range" data-min="10" data-max="500" data-start="[75, 244]" data-step="1" data-tooltip="true" data-min-diff="10" data-input=".rd-range-input-value-1" data-input-2=".rd-range-input-value-2"></div>
                                    </div><a class="button button-gray-light-outline" href="#">Filter</a>
                                </section>

                            </div>
                        </div>
                    </div>
                </section>
                <About />
                <Footer />
                <div class="modal fade" id="modalLogin" role="dialog">
                    <div class="modal-dialog modal-dialog_custom">

                        <div class="modal-dialog__inner">
                            <button class="close" type="button" data-dismiss="modal"></button>
                            <div class="modal-dialog__content">
                                <h5>Login Form</h5>

                                <form class="rd-mailform rd-mailform_responsive">
                                    <div class="form-wrap form-wrap_icon linear-icon-envelope">
                                        <input class="form-input" id="modal-login-email" type="email" name="email" data-constraints="@Email @Required" />
                                        <label class="form-label" for="modal-login-email">Your e-mail</label>
                                    </div>
                                    <div class="form-wrap form-wrap_icon linear-icon-lock">
                                        <input class="form-input" id="modal-login-password" type="password" name="password" data-constraints="@Required" />
                                        <label class="form-label" for="modal-login-password">Your password</label>
                                    </div>
                                    <button class="button button-primary" type="submit">Login</button>
                                </form>
                                <ul class="list-small">
                                    <li><a href="#">Forgot your username?</a></li>
                                    <li><a href="#">Forgot your password?</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modalRegister" role="dialog">
                    <div class="modal-dialog modal-dialog_custom">

                        <div class="modal-dialog__inner">
                            <button class="close" type="button" data-dismiss="modal"></button>
                            <div class="modal-dialog__content">
                                <h5>Register Form</h5>

                                <form class="rd-mailform rd-mailform_responsive" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                                    <div class="form-wrap form-wrap_icon linear-icon-envelope">
                                        <input class="form-input" id="modal-register-email" type="email" name="email" data-constraints="@Email @Required" />
                                        <label class="form-label" for="modal-register-email">Your e-mail</label>
                                    </div>
                                    <div class="form-wrap form-wrap_icon linear-icon-lock">
                                        <input class="form-input" id="modal-register-password" type="password" name="password" data-constraints="@Required" />
                                        <label class="form-label" for="modal-register-password">Your password</label>
                                    </div>
                                    <div class="form-wrap form-wrap_icon linear-icon-lock">
                                        <input class="form-input" id="modal-register-password2" type="password" name="password2" data-constraints="@Required" />
                                        <label class="form-label" for="modal-register-password2">Confirm password</label>
                                    </div>
                                    <div class="form-wrap">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" name="remember" />Remember me
                                        </label>
                                    </div>
                                    <button class="button button-primary" type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CatalogList
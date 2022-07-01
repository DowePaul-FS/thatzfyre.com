import React from "react";
import ProdCat from "../../components/prod_cat/ProdCat";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cta = ({image1, name, price}) => {
    return (
            <section class="section-lg bg-default">
                <div class="container text-center">
                    <h4>Furniture on Fire - Hot Sales!</h4>
                    
                    <div class="owl-carousel carousel-product" data-autoplay="true" data-items="1" data-md-items="2" data-lg-items="3" data-xl-items="4" data-stage-padding="0" data-loop="false" data-margin="50" data-mouse-drag="false" data-nav="true">
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src={image1} />
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                        <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">{name}</a></h6>
                                    <p class="product-price"><span>{price}</span>
                                    </p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-cart"></span><span>Add to cart</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/modern-small-cucciolo-2-seater-sofa-domingo-salotti-1-300x300.jpg" alt="" width="300" height="300" />
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Modern small cucciolo 2 seater sofa domingo salotti</a></h6>
                                    <p class="product-price"><span>16</span>
                                    </p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-cart"></span><span>Add to cart</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/my-italian-living-contemporary-manila-leather-blue-dining-chair-by-imperial-line-300x300.jpg" alt="" width="300" height="300" />
                                    
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><Link to="singleproduct">My italian living contemporary manila leather BLUE CHAIR</Link></h6>
                                    <p class="product-price"><span>44</span>
                                    </p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-cart"></span><span>Add to cart</span></a>
                                    <ul class="rating-list">
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/Porta-venezia-kitchen-bar-dining-stool-by-infiniti-design-300x300.jpg" alt="" width="300" height="300" />
                                    
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Porta venezia kitchen bar dining stool by infiniti design</a></h6>
                                    <p class="product-price"><span>82</span>
                                    </p><a class="button-gray-light-outline button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-magic-wand"></span><span>Select options</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/santarossa_plastic_transparent_glossy_chair-1-300x300.jpg" alt="" width="300" height="300" />
                                    
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Santarossa plastic transparent glossy chair</a></h6>
                                    <p class="product-price"><span>40</span>
                                    </p><a class="button-gray-light-outline button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-magic-wand"></span><span>Select options</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/slamp-lighting-italain-designer-floor-lamp-contemporary-design-1-300x300.jpg" alt="" width="300" height="300" />
                                    
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Slamp italian floor lamp luxury italian lighting</a></h6>
                                    <p class="product-price"><span>43</span>
                                    </p><a class="button-gray-light-outline button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-magic-wand"></span><span>Select options</span></a>
                                    <ul class="rating-list">
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/garda-square-sideboard-for-living-and-dining-room-by-dallagnese-300x300.jpg" alt="" width="300" height="300" />
                                    <div class="product-label-wrap"><span class="featured">Featured</span></div>
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Garda square sideboard for living room</a></h6>
                                    <p class="product-price"><span>48</span>
                                    </p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-cart"></span><span>Add to cart</span></a>
                                    <ul class="rating-list">
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-secondary-4"></span></li>
                                        <li><span class="icon linear-icon-star icon-gray-4"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="product product-grid">
                                <div class="product-img-wrap"><img src="assets/images/emma-chairs-and-table-for-kitchen-300x300.jpg" alt="" width="300" height="300" />
                                    <div class="product-label-wrap"><span class="new">New</span></div>
                                </div>
                                <div class="product-caption">
                                    <ul class="product-categories">
                                    <ProdCat />
                                    </ul>
                                    <h6 class="product-title"><a href="single-product.html">Italian emma chairs and table wooden for kitchen</a></h6>
                                    <p class="product-price"><span>69</span>
                                    </p><a class="button-black button button-icon button-icon-left" href="single-product.html"><span class="icon icon-md linear-icon-cart"></span><span>Add to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

Cta.propTypes = {
    image1: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
}

Cta.defaultProps = {
    img1: "assets/images/italian-furniture-contemporary-mix-steel-base-wooden-table-top-dining-table-by-sedit-2-300x300.jpg",
    name: "Italian furniture contemporary mix steel base WOODEN SET",
    price: 87,
}

export default Cta
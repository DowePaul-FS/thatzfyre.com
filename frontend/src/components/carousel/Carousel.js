import React, { useState, useEffect } from "react";
import axios from "../../API";
import ProdCat from "../../components/prod_cat/ProdCat";
import { Link } from "react-router-dom";

const Carousel = () => {
    const [caro, setCaro] = useState([]);
    useEffect(() => {
        async function fetchCaro() {
            const response = await axios("http://localhost:4000/products", {});
            setCaro(response.data);
        }
        fetchCaro();
    }, []);
    return (
        <section class="section-lg bg-default">
            <div class="container text-center">
                <h4>Furniture on Fire - Hot Sales!</h4>
                <div class="owl-carousel carousel-product" data-autoplay="true" data-items="1" data-md-items="2" data-lg-items="3" data-xl-items="4" data-stage-padding="0" data-loop="false" data-margin="50" data-mouse-drag="false" data-nav="true">
                    {caro.map(p => {
                        return (
                            <div class="item">
                                <div class="product product-grid">
                                    <div class="product-img-wrap"><img src={p.image1} alt="" width="300" height="300" />
                                    </div>
                                    <div class="product-caption">
                                        <ul class="product-categories">
                                            <ProdCat />
                                        </ul>
                                        <h6 class="product-title"><Link to={"/singleproduct/" + p.id} key={p.id}>{p.name}</Link></h6>
                                        <p class="product-price"><span>{p.price}</span>
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
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Carousel
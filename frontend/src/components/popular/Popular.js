import React, { useState, useEffect } from "react";
import axios from "../../API";
import { Link } from "react-router-dom";

const Popular = () => {
    const [popu, setPopu] = useState([]);
    useEffect(() => {
        async function fetchPopu() {
            const response = await axios("http://localhost:4000/popularlist", {});
            setPopu(response.data);
        }
        fetchPopu();
    }, []);
    return (
        <section class="section-lg bg-default">
            <div class="container text-center">
                <h4>Most Popular Items</h4>
                <div class="tabs-custom tabs-vertical row no-gutters" id="tabs-1">
                    <div class="owl-carousel carousel-product" data-items="1" data-md-items="1" data-lg-items="2" data-xl-items="3" data-stage-padding="0" data-loop="false" data-margin="50" data-mouse-drag="false" data-nav="true">
                        {popu.map(p => {
                            return (
                                <div class="item" key={p.id}>
                                    {p.Products.map(prod => (
                                        <div class="product product-grid">
                                            <div class="product-img-wrap" key={prod.id}><img src={prod.image1} alt="" width="300" height="300" />
                                            </div>
                                            <div class="product-caption">
                                                <ul class="product-categories">
                                                    {p.Categories.map(cat => (
                                                        <li key={cat.id}>{cat.name}</li>
                                                    ))}
                                                </ul>
                                                <small class="product-title"><Link to={"/singleproduct/" + prod.id} key={prod.id}>{prod.name}</Link></small>
                                                <p class="product-price" key={prod.id}><span>{prod.price}</span>
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
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popular;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
            <div class="swiper-container swiper-slider" data-simulate-touch="false" data-loop="false" data-autoplay="5500">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-gray-lighter" data-slide-bg="assets/images/slider-slide-1-1920x980.jpg">
                        <div class="swiper-slide-caption text-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h1 data-caption-animate="fadeInUpSmall"><span>Save 29%</span></h1>
                                        <h4 data-caption-animate="fadeInUpSmall" data-caption-delay="200">... when buying kitchen tables!</h4>
                                        <div class="group-lg group-middle"><Link class="button button-primary" data-caption-animate="fadeInUpSmall" data-caption-delay="350" to={"/singleproduct/240a4691-0c78-4eb6-ab8c-e4d950a88b99"}>VIEW ALL PRODUCTS</Link></div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide bg-gray-lighter" data-slide-bg="assets/images/slider-slide-2-1920x980.jpg">
                        <div class="swiper-slide-caption text-center">
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-7">
                                        <h4 data-caption-animate="fadeInUpSmall">Best lighting for Your Kids’ Room is Now on Sale!</h4>
                                        <h2 data-caption-animate="fadeInUpSmall" data-caption-delay="200">Up to 50% off!</h2><a class="button button-primary" data-caption-animate="fadeInUpSmall" data-caption-delay="350" href="catalog-grid.html">SHOP NOW!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide bg-gray-lighter" data-slide-bg="assets/images/slider-slide-3-1920x980.jpg">
                        <div class="swiper-slide-caption text-center">
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-10 col-xxl-7">
                                        <h2 data-caption-animate="fadeInUpSmall">If Your Purchase is Over $250</h2>
                                        <h4 class="block-centered" data-caption-animate="fadeInUpSmall" data-caption-delay="200">We'll Give You a FREE Delivery!</h4>
                                        <div class="group-lg group-middle"><a class="button button-primary" data-caption-animate="fadeInUpSmall" data-caption-delay="350" href="catalog-grid.html">SHOP NOW!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="swiper-pagination"></div>
                
                <div class="swiper-button-prev linear-icon-chevron-left"></div>
                <div class="swiper-button-next linear-icon-chevron-right"></div>
            </div>
        
    );
};

export default Hero
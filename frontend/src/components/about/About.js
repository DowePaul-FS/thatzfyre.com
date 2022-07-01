import React from "react";
import PropTypes from "prop-types";

const About = ({cat1, cat2, cat3, cat4}) => {
    return (
        <section class="pre-footer-corporate">
            <div class="container">
                <div class="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">
                    <div class="col-sm-10 col-md-6 col-lg-10 col-xl-3">
                        <h6>About</h6>
                        <p>
                            Furni is one of the leading online stores providing affordable and
                            reliable furniture to all American citizens. After years of
                            development, we continue to share our passion and excitement for
                            all things “home” by providing quality products, timeless designs
                            and expert guidance.
                        </p>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3 col-xl-3">
                        <h6>Navigation</h6>
                        <ul class="list-xxs">
                            <li>
                                <a href="about">{cat1}</a>
                            </li>
                            <li>
                                <a href="about">{cat2}</a>
                            </li>
                            <li>
                                <a href="about">{cat3}</a>
                            </li>
                            <li>
                                <a href="about">{cat4}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-4 col-xl-3">
                        <h6>Contacts</h6>
                        <ul class="list-xs">
                            <li>
                                <dl class="list-terms-minimal">
                                    <dt>Address</dt>
                                    <dd>4578 Marmora Road, Glasgow, D04 89GR</dd>
                                </dl>
                            </li>
                            <li>
                                <dl class="list-terms-minimal">
                                    <dt>Phones</dt>
                                    <dd>
                                        <ul class="list-semicolon">
                                            <li>
                                                <a href="callto:#">(800) 123-0045</a>
                                            </li>
                                            <li>
                                                <a href="callto:#">(800) 123-0045</a>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl class="list-terms-minimal">
                                    <dt>E-mail</dt>
                                    <dd>
                                        <a href="mailto:#">info@demolink.org</a>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl class="list-terms-minimal">
                                    <dt>We are open</dt>
                                    <dd>Mn-Fr: 10 am-8 pm</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

About.propTypes = {
        cat1: PropTypes.string,
        cat2: PropTypes.string,
        cat3: PropTypes.string,
        cat4: PropTypes.string,  
}

About.defaultProps = {
    cat1: "Living Room",
    cat2: "Dining Room",
    cat3: "Bedroom",
    cat4: "Kitchen",
}

export default About;

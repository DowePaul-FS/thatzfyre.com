import React from "react";
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero";
import Carousel from "../components/carousel/Carousel";
import Popular from "../components/popular/Popular";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div class="page">
            <div class="preloader">
                <div class="cssload-container">
                    <div class="cssload-speeding-wheel"></div>
                </div>
            </div>
            <Header />
            <Hero />
            <Carousel />
            <Popular />
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
    );
};

export default Home
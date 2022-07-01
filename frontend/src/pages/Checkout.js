import React from "react";
import Header2 from "../components/header/Header2";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";


const Checkout = () => {
    return (
        <div class="page">
            <div class="preloader">
                <div class="cssload-container">
                    <div class="cssload-speeding-wheel"></div>
                </div>
            </div>
            <Header2 />
            <section class="section-sm bg-default">
                <div class="container">
                    <div id="accordion" role="tablist">
                        <div class="panel panel-custom">
                            <div class="panel-custom-heading" id="1Headingundefined" role="tab">
                                <h5 class="panel-custom-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#1" href="#1Collapseundefined" aria-controls="1Collapseundefined">Returning customer?<span>Click here to login</span></a>
                                </h5>
                            </div>
                            <div class="panel-custom-collapse collapse" id="1Collapseundefined" role="tabpanel" aria-labelledby="1Headingundefined">
                                <div class="panel-custom-body">
                                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                                    
                                    <form class="rd-mailform rd-mailform_responsive rd-mailform_style-2">
                                        <div class="form-wrap form-wrap_icon linear-icon-envelope">
                                            <input class="form-input" id="modal-login-email" type="email" name="email" data-constraints="@Email @Required" />
                                                <label class="form-label" for="modal-login-email">Your e-mail</label>
                                        </div>
                                        <div class="form-wrap form-wrap_icon linear-icon-lock">
                                            <input class="form-input" id="modal-login-password" type="password" name="password" data-constraints="@Required" />
                                                <label class="form-label" for="modal-login-password">Your password</label>
                                        </div>
                                        <div class="form-wrap group-xl">
                                            <button class="button button-primary" type="submit">Login</button>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" name="remember">Remember me</input>
                                            </label>
                                        </div>
                                    </form>
                                    <ul class="list-small">
                                        <li><a href="#">Lost your password?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                        <form class="rd-mailform text-left row row-50" data-form-type="contact" action="bat/rd-mailform.php" method="post">
                            <div class="col-md-6 col-lg-4">
                                <h5>Billing Details</h5>
                                <div class="form-wrap">
                                    <input class="form-input" id="contact_name" type="text" name="contact_name" data-constraints="@Required" />
                                        <label class="form-label" for="contact_name">First Name *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="contact_last_name" type="text" name="contact_last_name" data-constraints="@Required" />
                                        <label class="form-label" for="contact_last_name">Last Name *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="company" type="text" name="company" />
                                        <label class="form-label" for="company">Company Name</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="contact_email" type="email" name="email" data-constraints="@Email @Required" />
                                        <label class="form-label" for="contact_email">Email Address *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="contact_phone" type="text" name="phone" data-constraints="@Numeric" />
                                        <label class="form-label" for="contact_phone">Phone *</label>
                                </div>
                                <div class="form-wrap">
                                    
                                    <select class="form-control select-filter" data-placeholder="Country" data-minimum-results-for-search="Infinity" data-constraints="@Required">
                                        <option>Country</option>
                                        <option value="2">USA</option>
                                        <option value="3">Mexico</option>
                                        <option value="4">China</option>
                                    </select>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="address" type="text" name="address" data-constraints="@Required" />
                                        <label class="form-label" for="address">Street address *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="address2" type="text" name="address2" />
                                        <label class="form-label" for="address2">Apartment, suite, unit etc. (optional)</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="city" type="text" name="city" data-constraints="@Required" />
                                        <label class="form-label" for="city">Town / City *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="state" type="text" name="state" data-constraints="@Required" />
                                        <label class="form-label" for="state">State / County *</label>
                                </div>
                                <div class="form-wrap">
                                    <input class="form-input" id="postcode" type="text" name="postcode" data-constraints="@Required" />
                                        <label class="form-label" for="postcode">Postcode / ZIP *</label>
                                </div>
                                <div class="form-wrap">
                                    <button class="button button-primary" input type="submit" id="submit" name="submit">Submit</button>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="remember">Create an account?</input>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-8">
                                <h5>Additional Information</h5>
                                <div class="form-wrap">
                                    <textarea class="form-input" id="contact-message" name="message"></textarea>
                                    <label class="form-label" for="contact-message">Order Notes *</label>
                                </div>
                            </div>
                        </form>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="divider"></div>
                </div>
            </section>
            <section class="section-sm bg-default">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h5>Your order</h5>
                            <div class="table-responsive">
                                <table class="table-checkout">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6><a class="thumbnail-classic-title" href="single-product.html">Italian furniture contemporary…</a></h6>
                                            </td>
                                            <td>
                                                <div class="product-price"><span>45</span></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6><a class="thumbnail-classic-title" href="single-product.html">Italian emma chairs…</a></h6>
                                            </td>
                                            <td>
                                                <div class="product-price"><span>45</span></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td class="text-md-right" colspan="2">
                                                <dl class="list-terms-minimal">
                                                    <dt>Subtotal</dt>
                                                    <dd>$90</dd>
                                                </dl>
                                                <dl class="heading-5 list-terms-minimal">
                                                    <dt>Total</dt>
                                                    <dd>$90</dd>
                                                </dl>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
                <div class="container">
                    <div class="divider"></div>
                </div>

            </section>
            <section class="section-sm bg-default">
                <div class="container">
                    <div class="payment-box">
                        <div class="form-wrap">
                            <label class="radio-inline">
                                <input class="radio-custom" name="input-group-radio" value="radio-1" type="radio">Cheque Payment</input>
                            </label>
                        </div>
                        <div class="payment-box-inner">
                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                    </div>
                    <div class="payment-box">
                        <div class="form-wrap">
                            <label class="radio-inline">
                                <input class="radio-custom" name="input-group-radio" value="radio-1" type="radio">PayPal</input>
                            </label><img src="images/checkout-1-319x110.png" alt="" width="319" height="110" />
                        </div>
                        <div class="payment-box-inner">
                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                        </div>
                    </div>
                    <div class="payment-box-button">
                        <button class="button button-primary" type="submit">Place order</button>
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
    );
}

export default Checkout
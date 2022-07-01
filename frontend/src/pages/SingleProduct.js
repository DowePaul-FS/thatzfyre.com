import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from "../components/header/Header2";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [sing, setSing] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchSing() {
      const response = await axios(
        `/products/${params.id}`,
        {}
      );
      setSing(response.data);
    }
    fetchSing();
  }, [params.id]);
  return (
    <div class="page">
      <div class="preloader">
        <div class="cssload-container">
          <div class="cssload-speeding-wheel"></div>
        </div>
      </div>
      <Header2 />
      <section class="breadcrumbs-custom">
        <div class="container">
          <div class="breadcrumbs-custom__inner">
            <p class="breadcrumbs-custom__title">Single Product</p>
            <ul class="breadcrumbs-custom__path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="cat">Catalog</a>
              </li>
              <li class="active">Single Product</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section-sm bg-default">
        <div class="container">
          <div class="row row-60">
            <div class="col-md-6 col-lg-5">
              <div
                class="slick-slider carousel-parent"
                data-arrows="false"
                data-loop="false"
                data-dots="false"
                data-swipe="true"
                data-items="1"
                data-child="#child-carousel"
                data-for="#child-carousel"
                data-lightgallery="group"
              >
                <div class="item">
                  <figure>
                    <img
                      src={"../" + sing.image1}
                      alt=""
                      width="300"
                      height="300"
                    />
                  </figure>
                </div>
                <div class="item">
                  <figure>
                    <img src={sing.image1} alt="" width="300" height="300" />
                  </figure>
                </div>
                <div class="item">
                  <figure>
                    <img src={sing.image1} alt="" width="300" height="300" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-7">
              <div class="product-single">
                <h4 key={sing.id}>{sing.name}</h4>
                <p class="product-price" key={sing.id}>
                  <span>{sing.price}</span>
                </p>
                <ul class="rating-list">
                  <li>
                    <span class="icon linear-icon-star icon-secondary-4"></span>
                  </li>
                  <li>
                    <span class="icon linear-icon-star icon-secondary-4"></span>
                  </li>
                  <li>
                    <span class="icon linear-icon-star icon-secondary-4"></span>
                  </li>
                  <li>
                    <span class="icon linear-icon-star icon-secondary-4"></span>
                  </li>
                  <li>
                    <span class="icon linear-icon-star icon-gray-4"></span>
                  </li>
                </ul>
                <p class="product-text">
                  {sing.description}
                </p>
                <div class="group">
                  <input
                    class="form-input"
                    type="number"
                    data-zeros="true"
                    value="1"
                    min="1"
                    max="50"
                  />
                  <button
                    class="button button-primary button-icon button-icon-left"
                    type="submit"
                  >
                    <span class="icon icon-md linear-icon-cart"></span>
                    <span>Add to cart</span>
                  </button>
                </div>
                <ul class="product-meta">
                  <li>
                    <dl class="list-terms-minimal">
                      <dt>Category</dt>
                      <dd>
                        <ul class="product-categories">
                          <li>
                            <a href="single-product.html">Living Room</a>
                          </li>
                          <li>
                            <a href="single-product.html">Dining room</a>
                          </li>
                          <li>
                            <a href="single-product.html">Bedroom</a>
                          </li>
                          <li>
                            <a href="single-product.html">Office</a>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="tabs-custom tabs-horizontal" id="tabs-1">
                <ul class="nav-custom nav-custom-tabs nav-custom__align-left nav nav-tabs">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      href="#tabs-1-1"
                      data-toggle="tab"
                    >
                      DESCRIPTION
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" href="#tabs-1-2" data-toggle="tab">
                      ADDITIONAL INFORMATION
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content text-left">
                <div class="tab-pane fade show active" id="tabs-1-1">
                  <h5>Product Description</h5>
                  <p>
                    {sing.description}
                  </p>
                  <ul class="list-marked">
                    <li>Guarantee</li>
                    <li>Luxury Chair Design</li>
                    <li>Quilted Detail, Stud Edging & Satin Ring</li>
                    <li>Protective Plugs To Look After Your Floors</li>
                    <li>These Product Are Available In Any Quantity</li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="tabs-1-2">
                  <h5>Additional Information</h5>
                  <table class="table-product-info">
                    <tbody>
                      <tr>
                        <td>Brand</td>
                        <td>My italian</td>
                      </tr>
                      <tr>
                        <td>Manufacturer</td>
                        <td>Italy</td>
                      </tr>
                      <tr>
                        <td>Features</td>
                        <td>Energy Star Compliant, Handmade, UL Listed</td>
                      </tr>
                      <tr>
                        <td>Waterproof</td>
                        <td>yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="divider"></div>
      </div>
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
                  <input
                    class="form-input"
                    id="modal-login-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label class="form-label" for="modal-login-email">
                    Your e-mail
                  </label>
                </div>
                <div class="form-wrap form-wrap_icon linear-icon-lock">
                  <input
                    class="form-input"
                    id="modal-login-password"
                    type="password"
                    name="password"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="modal-login-password">
                    Your password
                  </label>
                </div>
                <button class="button button-primary" type="submit">
                  Login
                </button>
              </form>
              <ul class="list-small">
                <li>
                  <a href="#">Forgot your username?</a>
                </li>
                <li>
                  <a href="#">Forgot your password?</a>
                </li>
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
              <form
                class="rd-mailform rd-mailform_responsive"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div class="form-wrap form-wrap_icon linear-icon-envelope">
                  <input
                    class="form-input"
                    id="modal-register-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label class="form-label" for="modal-register-email">
                    Your e-mail
                  </label>
                </div>
                <div class="form-wrap form-wrap_icon linear-icon-lock">
                  <input
                    class="form-input"
                    id="modal-register-password"
                    type="password"
                    name="password"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="modal-register-password">
                    Your password
                  </label>
                </div>
                <div class="form-wrap form-wrap_icon linear-icon-lock">
                  <input
                    class="form-input"
                    id="modal-register-password2"
                    type="password"
                    name="password2"
                    data-constraints="@Required"
                  />
                  <label class="form-label" for="modal-register-password2">
                    Confirm password
                  </label>
                </div>
                <div class="form-wrap">
                  <label class="checkbox-inline">
                    <input type="checkbox" name="remember" />
                    Remember me
                  </label>
                </div>
                <button class="button button-primary" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

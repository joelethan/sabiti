import React, { Component } from 'react'
import one from '../../img/categories/1.jpg';
import two from '../../img/categories/2.jpg';
import three from '../../img/categories/3.jpg';
export default class Body extends Component {
    render() {
        return (
            <section class="categories-section spad">
                <div class="container">
                    <div class="section-title">
                        <h2>Our Scholarship Categories</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                    <div class="row">
                        {/* <!-- categorie --> */}
                        <div class="col-lg-4 col-md-6">
                            <div class="categorie-item">
                                <img class="ci-thumb set-bg" src={one} alt=''/>                                <div class="ci-text">
                                    <h5>IT Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- categorie --> */}
                        <div class="col-lg-4 col-md-6">
                            <div class="categorie-item">
                                <img class="ci-thumb set-bg" src={two} alt=''/>
                                <div class="ci-text">
                                    <h5>Web Design</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- categorie --> */}
                        <div class="col-lg-4 col-md-6">
                            <div class="categorie-item">
                                <img class="ci-thumb set-bg" src={three} alt=''/>
                                <div class="ci-text">
                                    <h5>Illustration & Drawing</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

import "./cannon.style.css";

import NavigationBar from "./navigationBar.component.jsx";

export default class Cannon extends React.Component{
render(){
    return(
        <section className="cannon-main-page">

            {/*Nav bar*/}
            <NavigationBar/>

            {/*First Section*/}
            <section className="first-section section-introduction">
                <div className="intro-container intro-container-1">
                    <h1>The tittle of your product</h1>
                    <p>A subtitle with information, description or<br/>anything about your project</p>
                </div>
                <div className="intro-container intro-container-2">
                    <div className="intro-button">
                        <h5>GET STARTED FREE</h5>
                    </div>
                </div>
                <div className="intro-container intro-container-3">
                    <iframe src="https://www.youtube.com/embed/y2Ky3Wo37AY?feature=oembed" frameborder="0" width="100%" height="100%"></iframe>
                </div>
            </section>

            {/*Second Section*/}
            <section className="second-section section-characteristics">

                <div className="characteristic-product characteristic-product-1">
                    <div className="product-info product-information">
                        <h4>Title of the characteristic</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officia maiores corporis ipsa quasi sint fugit cumque molestias rerum quia consectetur nobis tempore nihil fuga labore quae minima magni tempora iste saepe quis.</p>
                    </div>

                    {/*Firts transformed div*/}
                    <div className="product-info product-options">
                        <div className="transformed-container">
                            <div className="cont-transformed cont-transformed-1">
                                <div className="div-circle"></div>
                                <div className="info-circle"> Today's feed</div>
                            </div>
                            <div className="cont-transformed cont-transformed-2">
                                <div className="update-transformed update-transformed-1">
                                    <div className="update-img"></div>
                                    <div className="update-info">
                                        <h4>Product updated</h4>
                                        <p>Last update a few moments ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-transformed cont-transformed-3">
                                <div className="div-circle"></div>
                                <div className="info-circle"> Yesterday's feed</div>
                            </div>
                            <div className="cont-transformed cont-transformed-4">
                                <div className="update-transformed update-transformed-2">
                                    <div className="update-img"></div>
                                    <div className="update-info">
                                        <h4>Product updated</h4>
                                        <p>Last update: 1 hour and 1 day</p>
                                    </div>
                                </div>
                                <div className="update-transformed update-transformed-3">
                                    <div className="update-img"></div>
                                    <div className="update-info">
                                        <h4>Product updated</h4>
                                        <p>Last update: 7 hour and 1 day</p>
                                    </div>
                                </div>
                                <div className="update-transformed update-transformed-4">
                                    <div className="update-img"></div>
                                    <div className="update-info">
                                        <h4>Product updated</h4>
                                        <p>Last update: 18 hour and 1 day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="characteristic-product characteristic-product-2">
                    <div className="product-info product-information">
                        <h4>Title of the characteristic</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime asperiores ad, facere, quos saepe dicta voluptates tempore! Blanditiis corrupti saepe asperiores, accusantium doloribus dolor. Odit alias hic aliquid.</p>
                    </div>
                    {/*Second transformed div*/}
                    <div className="product-info product-options">
                        <div className="tab-transformed tab-transformed-1"></div>
                        <div className="tab-transformed tab-transformed-2"></div>
                        <div className="tab-transformed tab-transformed-3">
                            <div className="top-tab">
                                <div className="circle-tab circle-tab-1"></div>
                                <div className="circle-tab circle-tab-2"></div>
                                <div className="circle-tab circle-tab-3"></div>
                            </div>
                            <div className="image-tab">
                                <img src="http://via.placeholder.com/400x380" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="characteristic-product characteristic-product-3">
                    <div className="product-info product-information">
                        <h4>Title of the characteristic</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis placeat fuga, inventore itaque commodi, optio vitae. Vel similique quos, eos minus fugit, necessitatibus. Tempore et mollitia blanditiis tenetur excepturi</p>
                    </div>
                    {/*Third transformed div*/}
                    <div className="product-info product-options">
                        <div className="screen-transformed screen-transformed-1"></div>
                        <div className="screen-transformed screen-transformed-2"></div>
                        <div className="screen-transformed screen-transformed-3">
                            <div className="top-tab">
                                <div className="circle-tab circle-tab-1"></div>
                                <div className="circle-tab circle-tab-2"></div>
                                <div className="circle-tab circle-tab-3"></div>
                            </div>
                            <div className="image-tab">
                                <img src="http://via.placeholder.com/350x250" alt=""/>
                            </div>
                        </div>
                        { [...Array(5)].map( (val, index) => 
                            <span className={`span-transformed span-transformed-${index+1}`}></span>
                        )}
                    </div>
                </div>

                <div className="characteristic-product characteristic-product-4">
                    <div className="product-info product-information">
                        <h4>Title of the characteristic</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatem numquam architecto nisi cumque quos. Quibusdam, delectus! Illo consequatur nihil nisi, veritatis aperiam earum quidem laborum est rem ut natus hic repellendus</p>
                    </div>
                    {/*Fourth Transformation*/}
                    <div className="product-info product-options">
                        <div className="laptop">
                            <div className="laptop-screen">
                                <div className="laptop-cam"></div>
                                <div className="laptop-image">
                                    <img src="http://via.placeholder.com/350x250" alt=""/>
                                </div>
                            </div>
                            <div className="laptop-keyboard">
                                <div className="laptop-touchpad"></div>
                            </div>
                        </div>
                        <div className="mobile">
                            <div className="mobile-speaker"></div>
                            <div className="mobile-home-button"></div>
                            <div className="mobile-screen">
                                <img src="http://via.placeholder.com/50x120" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section> {/*End of second section*/}

            {/*Third section*/}
            <section className="third-section section-opinions">

                <div className="container-opinion">
                    <div className="opinion-box">
                        <div className="opinion-user">
                            <div className="user-avatar">
                                <img src="http://via.placeholder.com/90x90" alt=""/>
                            </div>
                            <div className="user-info">
                                <div className="user-name">Name Lastname</div>
                                <div className="user-position"> Manager of a Big Company</div>
                            </div>
                        </div>
                        <div className="opinion-text">
                            "This product was amazing for our companay. It makes our labor easier by delivering a highly productive service to our offices.
                            It improved our comunications inside our team by a lot!"
                        </div>
                        <div className="opinion-logo">
                            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" 
                                    alt="" width="100" height="50"/>
                        </div>
                    </div>
                </div>


                <div className="join-container">

                    <div className="join-title">
                        Join thousands of developers building sites on CloudCannon Today
                    </div>

                    <div className="join-button">
                        Get started free
                    </div>

                </div>


            </section>

        </section>)
    }
}
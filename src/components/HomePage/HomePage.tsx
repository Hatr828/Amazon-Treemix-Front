import "./HomePage.css"

export function HomePage() {
    return (
        <div className="main-div-homePage">
            <img src="/main-photo.png" className="main-photo-homePage"/>
            {/*  */}
            <div className="div-for-big-blocks">
                {[1, 2, 3].map((_, index) => (
                    <div className="div-big-block" key={index}>
                        <div className="head-text-more">
                            Name
                            <div className="text-more">More →</div>
                        </div>
                        <img src="/example1-product.png" className="photo-div-big-block"/>
                    </div>
                ))}
                <div className="div-for-special-big-block">
                    <div className="div-pre-sign-block">
                        Sign in for the best experience
                        <button className="button-pre-sign-block">Sign in securely</button>
                    </div>
                    <div className="div-pre-big-block">
                        We ship over 45 million
                            products around
                                the world
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="div-for-small-blocks-in-big">
                {[1, 2, 3, 4].map((_, index) => (
                    <div className="div-big-block" key={index}>
                        <div className="head-text-more">
                            Name
                            <div className="text-more">More →</div>
                        </div>
                        <div className="div-big-for-small-icon">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div className="div-for-small-icon" key={index}>
                                    Product
                                    <img src="/example1-product.png" className="photo-div-for-small-blocks-in-big"/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/*  */}
            <div className="div-for-column-row">
                <div className="div-for-column-blocks-in-big">
                    <div className="head-text-more-column">
                        Popular
                        <div className="text-more">More →</div>
                    </div>
                    {[1, 2, 3].map((_, index) => (
                        <div className="div-column" key={index}>
                            <div className="icon-column">
                                <img src="/example1-product.png" className="photo-column-product"/>
                            </div>
                            <div className="div-cost-name-product">
                                <div className="div-name-product">
                                    Tablet Samsung Galaxy Tab A7 Lite 8,7'' LTE 3/32Gb Gray
                                </div>
                                <div className="div-cost-product">
                                    <sup>$</sup>530
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="div-for-row-blocks-in-big">
                    <div className="head-text-more-column">
                        Most popular categories of the week
                        <div className="text-more">More →</div>
                    </div>
                    <div className="div-for-rows">
                        {[1, 2, 3].map((_, index) => (
                            <div className="div-row" key={index}>
                                <img src="/example1-product.png" className="photo-row-product"/>
                                <div className="div-name-product-column">
                                    Product
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
}
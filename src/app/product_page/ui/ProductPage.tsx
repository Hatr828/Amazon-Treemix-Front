"use client"
import {ProductQuestion, ProductType, MoreToConsiderItem} from "@/app/product_page/types/product_page_types";
import Image from 'next/image';
import {useState} from "react";
import {MoreToConsiderItemCard} from "@/app/product_page/ui/MoreToConsiderItemCard";
import {ManufacturerBlock} from "@/app/product_page/ui/ManufacturerBlock";
import "@/app/product_page/css/product_page.css"
import {VideoWrapper} from "@/app/product_page/ui/VideoWrapper";
import {AllQuestionsList} from "@/app/product_page/ui/AllQuestionsList";

import {ReviewComponent} from "@/app/product_page/ui/ReviewComponent";
import MoreToConsiderSection from "@/app/product_page/ui/MoreToConsiderSection";
import { useEffect } from "react";
import { useRecentlyViewed} from "@/app/product_page/hooks/useRecentlyViewed";


export function ProductPage({ product }: { product: ProductType }) {



    const exampleMoreToConsiderItem: MoreToConsiderItem = {
        id: "hyperx-cloud-orbit-s-black",
        is_on_sale: true,
        favorite: true,
        image: "/product_page/408e07536ec727720b8e9f7a99befeb458e43fd8.jpg",
        title: "Gaming headset HYPERX Cloud Orbit S Black",
        rating: 4,
        price: 1050,
        old_price: 1250
    }

    const exampleMoreToConsiderItemArray: MoreToConsiderItem[] = [exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem,
        exampleMoreToConsiderItem
    ]

    const [selectedItemMarker, setSelectedItemMarker] = useState<number>(0);

    const ratingArray: boolean[] = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating))

    //----====----====----====----====----====----====----====----====----//
    //reviews

    const [reviewsSwither, setReviewsSwither] = useState<boolean>(false);

    const [showAll, setShowAll] = useState(false);

    const reviews = reviewsSwither
        ? product.reviews?.[0] ?? []
        : product.reviews?.[1] ?? [];

    const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

    //----====----====----====----====----====----====----====----====----//

    const { addProduct } = useRecentlyViewed();



    useEffect(() => {
        if (product?.id) {
            addProduct(product.id);
        }
    }, [product?.id]);


    return(
    <div>
        <div className="image_title_buy_container">
            <div className="images_container">
                {product.images.map((image, index) => (
                    <div
                        key={"image-" + index}
                        className={selectedItemMarker === index ? "image_wrapper selected_image_wrapper" : "image_wrapper"}
                        onClick={() => setSelectedItemMarker(index)}
                    >
                        <img src={image.url} alt={`Image ${index + 1}`} width={75} height={75}/>
                    </div>
                ))}
            </div>

            <div className="main_image_container">
                <div className="main_image_zoom">
                    <img
                        src={product.images?.[selectedItemMarker]?.url ?? product.primaryImage?.url ?? ""}
                        alt="Main image"
                        width={450}
                        height={450}
                    />
                </div>
                <span className="zoom_hint">Roll over image to zoom in</span>
            </div>

            <div className="title_price_about_container">
                <h1 className="product_title">{product.title}</h1>

                <div className="ratings_row">
                    <div className="stars">
                        {ratingArray.map((filled, i) => (
                            <img
                                key={i}
                                src={filled ? '/filled_star.svg' : '/unfilled_star.svg'}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        ))}
                    </div>
                        <span className="rating_text">
                            {(product?.ratings ?? 0).toLocaleString()} ratings
                        </span>
                </div>

                <div className="divider"></div>

                <div className="price_info">
                    <div className="stock_status">In Stock</div>
                    <div className="price_row">
                        <span className="price_label">Price:</span>
                        <span className="price_value">${product.price.current}</span>
                    </div>
                    <p className="promo_text">
                        Pay ${ (product.price.current / 6).toFixed(2) }/month for 6 months, interest-free upon approval for the Amazon Rewards Visa Card.
                        Available at a lower price from other sellers that may not offer free Prime shipping.
                    </p>
                </div>

                <div className="about_container">
                    <h2>About this item</h2>
                    <ul className="about_list">
                        {product.about?.split('\n').filter(line => line.trim()).map((line, i) => (
                            <li key={i}>{line.trim()}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="buy_container">
                <div className="buy_price">${product.price.current}</div>

                <p className="shipping_text">
                    $47.21 Shipping & Import Fees Deposit to Ukraine <a href="#">Details</a>
                </p>

                <p className="delivery_text">
                    Delivery <strong>Thursday, February 17</strong>. Order within <a href="#">31 mins</a>
                </p>

                <div className="location_row">
                    <img src="/product_page/geomarker.svg" alt="marker" width={15} height={15}/>
                    <a href="#">Select delivery location</a>
                </div>

                <div className="quantity_controls">
                    <span>Quantity:</span>
                    <div className="qty_buttons">
                        <button className="qty_btn">-</button>
                        <span className="qty_val">1</span>
                        <button className="qty_btn">+</button>
                    </div>
                </div>

                <div className="action_buttons">
                    <button className="add_to_cart_btn">
                        <span>Add to Cart</span>
                    </button>
                    <button className="buy_now_btn">Buy Now</button>
                </div>

                <div className="secure_row">
                    <img src="/product_page/Secure.svg" alt="Secure" width={16} height={16}/>
                    <a href="#">Secure transaction</a>
                </div>
            </div>
        </div>

        <MoreToConsiderSection MoreToConsiderItemArray={exampleMoreToConsiderItemArray}/>

        <div className="offers_section">

            <h3>Special offers and product promotions</h3>

            <div className="offer_row">
                    <span style={{ alignContent: "center" }}>
                        Create your FREE Business account to save up to 10% with Business-only prices and free shipping
                    </span>
                <button className="apply_btn">Register today</button>
            </div>

            <div className="offer_row">
                    <span style={{ alignContent: "center" }}>
                        Your cost could be $49.99 instead of $99.99! Get a $50 Amazon Gift Card instantly upon approval for the Amazon Rewards Visa Card
                    </span>
                <button className="apply_btn">Apply now</button>
            </div>

        </div>


        <div className="question_section">

            <h3>Have a question?</h3>
            <span className="question_sub">
                    Find answers in product info, Q&As, reviews
                </span>

            <form className="search_form">

                <button type="submit" className="search_btn">
                    <Image
                        src="/search_icon.svg"
                        width={20}
                        height={20}
                        alt="search"
                    />
                </button>

                <input
                    type="search"
                    className="search_input"
                    placeholder="Type your question or keyword"
                />

            </form>

        </div>

        <form className='form' role="search">
            <button className='formSubmitButton' type='submit'>
                <Image
                    className='searchIcon'
                    style={{ height: '100%', width: 'auto', display: 'block' }}
                    src='/search_icon.svg'
                    height='24'
                    width='24'
                    alt='search'/>
            </button>
            <input
                className='formInput'
                id="search"
                name="q"
                type="search"
            />
        </form>

        {product.fromTheManufacturer && <ManufacturerBlock content={product.fromTheManufacturer}/>}


        <div className="description_container">
            <h3>Product Description</h3>
            <p>{product.description}</p>
        </div>


        <div className="Specs_warranty_container"></div>

        <div className="product-details-container">
            <div className="left-column">
                <section className="product-description">
                    <h3>Product Description</h3>
                    <table className="specs-table">
                        <tbody>
                        {product.productSpecifications?.map((item) => (
                            <tr key={"productSpecifications" + item.id}>
                                <td className="spec-name">
                                    {item.name}
                                </td>
                                <td className="spec-value">
                                    {item.rating !== undefined ? (
                                        <>
                                            {ratingArray.map((filled, i) => (
                                                <img
                                                    key={i}
                                                    src={filled ? '/filled_star.svg' : '/unfilled_star.svg'}
                                                    alt="star"
                                                    width={14}
                                                    height={14}
                                                />
                                            ))}
                                            <span>{item.description}</span>
                                        </>
                                    ) : (
                                        item.description
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>

            <div className="right-column">
                <section className="warranty-section">
                    <h3>Warranty & Support</h3>
                    <p>Product Warranty: For warranty information about this product, <a href="#">please click here</a> (PDF).</p>
                </section>

                <section className="feedback-section">
                    <h3>Feedback</h3>
                    <p>Would you like to <a href="#">tell us about a lower price?</a></p>
                </section>

                <section className="documents-section">
                    <h3>Product guides and documents</h3>
                    <table className="docs-table">
                        <tbody>
                        {product.documents?.map((item) => (
                            <tr key={"doc" + item.id}>
                                <td className="doc-name">{item.name}</td>
                                <td className="doc-link">
                                    <a href={item.download_link} className="pdf-button">{item.extension}</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>

        <section className="videos-section">
            <h3>Videos</h3>
            <div className="carousel-container">
                <button className="nav-btn prev">
                    <img src="./product_page/to_the_left.svg" alt="prev" />
                </button>

                <div className="videos-grid">
                    {product.videos?.map((video, index) => (
                        <div key={"video_" + index} className="video-card">
                            <div className="video-thumbnail-wrapper">
                                <VideoWrapper video={video} />
                                <span className="video-duration">6:08</span>
                            </div>
                            <div className="video-info">
                                <p className="video-title">{video.name || "Product Review"}</p>
                                <span className="video-author-badge">{video.author || "User"}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-btn next">
                    <img src="./product_page/to_the_right.svg" alt="next" />
                </button>
            </div>
            <button className="upload-btn">Upload your video</button>
        </section>


        <section className="qa-section">
            <h3>Customer questions & answers</h3>

            <form className="search-form" role="search">
                <div className="search-input-wrapper">
                    <Image
                        className="search-icon"
                        src="/search_icon.svg"
                        height="20"
                        width="20"
                        alt="search"
                    />
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Type your question or keyword"
                    />
                </div>
            </form>

            {product.productQuestions && (
                <AllQuestionsList allQuestions={product.productQuestions} />
            )}
        </section>

        <section className="mentions-section">
            <h3>Read reviews that mention</h3>
            <div className="tags-container">
                {product.mentionTags?.map((tag, index) => (
                    <button key={"tag_" + index} className="mention-tag">
                        {tag}
                    </button>
                ))}
            </div>
        </section>

        <section className="reviews-section">
            <div className="reviews-header">
                <h3>Top reviews from the United States</h3>
                <div className="reviews-switcher">
                    <button
                        className={`switch-btn ${!reviewsSwither ? 'active' : ''}`}
                        onClick={() => setReviewsSwither(false)}
                    >
                        Top reviews
                    </button>
                    <button
                        className={`switch-btn ${reviewsSwither ? 'active' : ''}`}
                        onClick={() => setReviewsSwither(true)}
                    >
                        Most recent
                    </button>
                </div>
            </div>

            <div className="reviews-list">
                {visibleReviews.map((review) => (
                    <ReviewComponent key={review.id} review={review} />
                ))}
            </div>

            {reviews.length > 4 && (
                <button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show less" : `See all reviews (${reviews.length})`}
                </button>
            )}
        </section>

    </div>
    )
}
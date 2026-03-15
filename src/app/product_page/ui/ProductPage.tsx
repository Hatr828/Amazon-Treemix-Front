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
export function ProductPage () {


    const exampleProduct: ProductType = {
        id: "1",
        title: "Gaming Headset HyperX Cloud Alpha",
        price: 99.99,
        rating: 4.6,
        ratings: 9600,
        images: [
            "/product_page/408e07536ec727720b8e9f7a99befeb458e43fd8.jpg",
            "/product_page/459bbe3b3a1152c4bbd9628a545bc2b4d1a57c2f.png",
            "/product_page/6472bac230ec010f1b31a39da2129c65360e783b.png",
            "/product_page/dde6ee10bf1d6e0fa098f41b1f770b868012eb85.png",
            "/product_page/fa11b7f604c0d8a3c7a3b6a476be68dbbf34f6af.png"],
        platform: "PlayStation 4",
        IsInStock: true,
        about: "HyperX Dual Chamber Drivers for more distinction and less distortion\n" +
                "Signature award winning HyperX comfort\n" +
                "Durable aluminum frame with expanded headband\n" +
                "Detachable braided cable with convenient in line audio control\n" +
                "Detachable noise cancellation microphone\n" +
                "Compatible with PC, PS4, PS4 Pro, Xbox One, Xbox One S, Mac, Mobile, Nintendo Switch, VR",
        description: "HyperXTM Cloud Alpha's groundbreaking Dual Chamber Drivers design gives audio more distinction and" +
                    " clarity by reducing distortion. The dual chambers separate the bass for cleaner, smoother sound. Cloud Alpha" +
                    " has premium red memory foam, an expanded headband and softer, more pliable leatherette, an aluminum frame," +
                    " detachable braided cable and noise-cancellation microphone. Multi-platform compatible with in-line audio" +
                    " controls on PC, PS4, Xbox One and other platforms with 3.5mm ports. Frequency response of Microphone is 50Hz-18,000Hz." +
                    " Issues due to headset detachable main cord partially inserted in the ear cup jack resulting in no microphone" +
                    " audio or quiet/static sounds. The customer should follow the Cloud Alpha User Manual or HyperX Gaming support" +
                    " website headset cable attachment guidelines to properly connect the cord, activate the microphone audio on the" +
                    " Alpha inline volume control box, and ensure Cloud Alpha configured as primary audio playback and recording device" +
                    " on the host system.",
        fromTheManufacturer: {
            id: "manu-001",
            html: `

<style>
.manufacturer_section{
max-width:1200px;
margin:60px auto;
font-family:Arial;
}

.review_banner{
position:relative;
border-radius:12px;
overflow:hidden;
margin-bottom:40px;
}

.banner_img{
width:100%;
display:block;
}

.play_button{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:rgba(0,0,0,0.5);
width:80px;
height:80px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:30px;
}


.features_grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
margin-bottom:60px;
}

.feature_card{
background:#f7f7f7;
border-radius:12px;
padding:20px;
text-align:left;
}

.feature_card img{
width:100%;
border-radius:8px;
margin-bottom:10px;
}

.feature_card h4{
font-size:14px;
margin-bottom:6px;
}

.feature_card p{
font-size:12px;
color:#555;
}


.compare_title{
text-align:center;
margin:40px 0 20px;
}


.compare_table{
display:flex;
flex-direction:column;
gap:10px;
}

.compare_row{
display:grid;
grid-template-columns:200px repeat(4,1fr);
gap:10px;
}

.compare_row div{
background:#f4f4f4;
padding:12px;
border-radius:10px;
font-size:13px;
text-align:center;
}

.compare_row div:first-child{
background:transparent;
text-align:left;
font-weight:bold;
}


.bottom_banner{
margin-top:60px;
border-radius:12px;
overflow:hidden;
}

.bottom_banner img{
width:100%;
display:block;
}

</style>
<div class="manufacturer_section">

<div class="review_banner">
    <img src="banner.jpg" class="banner_img">
    <div class="play_button">▶</div>
</div>


<div class="features_grid">

<div class="feature_card">
<img src="feature1.jpg">
<h4>50mm Dual Chamber Drivers</h4>
<p>With one chamber for bass and a separate one for mids and highs, HyperX Cloud Alpha provides more distinction between sounds.</p>
</div>

<div class="feature_card">
<img src="feature2.jpg">
<h4>Ultimate Comfort</h4>
<p>Over-ear design with premium memory foam complemented by an expanded headband.</p>
</div>

<div class="feature_card">
<img src="feature3.jpg">
<h4>Long-lasting Aluminum Frame</h4>
<p>Aluminum frame construction for durability and stability.</p>
</div>

<div class="feature_card">
<img src="feature4.jpg">
<h4>In-line Audio Controls</h4>
<p>Convenient audio controls for easy volume adjustment and mic muting.</p>
</div>

<div class="feature_card">
<img src="feature5.jpg">
<h4>Detachable Cable</h4>
<p>Reduces storage bulk and potential cable damage.</p>
</div>

<div class="feature_card">
<img src="feature6.jpg">
<h4>Detachable Microphone</h4>
<p>The noise-cancellation microphone is easy to plug in for gaming.</p>
</div>

<div class="feature_card">
<img src="feature7.jpg">
<h4>TeamSpeak & Discord Certified</h4>
<p>Compatible with Skype, Ventrilo, Mumble and other VoIP programs.</p>
</div>

<div class="feature_card">
<img src="feature8.jpg">
<h4>Multi-Platform Compatibility</h4>
<p>Works on PC, PS4, PS5, Xbox One, Nintendo Switch and mobile.</p>
</div>

</div>


<h2 class="compare_title">Compare HyperX Headsets</h2>


<div class="compare_table">

<div class="compare_row header">
<div></div>
<div>Cloud Alpha</div>
<div>Cloud Alpha S</div>
<div>Cloud Stinger</div>
<div>Cloud Stinger</div>
</div>

<div class="compare_row">
<div>Connection</div>
<div>3.5mm</div>
<div>3.5mm / USB Sound Card</div>
<div>3.5mm</div>
<div>3.5mm</div>
</div>

<div class="compare_row">
<div>Sound</div>
<div>Stereo</div>
<div>7.1 Virtual Surround</div>
<div>Stereo</div>
<div>Stereo</div>
</div>

<div class="compare_row">
<div>Driver</div>
<div>50mm Dual Chamber</div>
<div>50mm Dual Chamber</div>
<div>50mm Directional</div>
<div>50mm Directional</div>
</div>

<div class="compare_row">
<div>Noise-Canceling Mic</div>
<div>Detachable</div>
<div>Detachable</div>
<div>Swivel-to-mute</div>
<div>Swivel-to-mute</div>
</div>

<div class="compare_row">
<div>Ear Cushions</div>
<div>Memory Foam + Leatherette</div>
<div>Memory Foam + Leatherette</div>
<div>Memory Foam + Leatherette</div>
<div>Memory Foam + Leatherette</div>
</div>

</div>


<div class="bottom_banner">
<img src="bottom_banner.jpg">
</div>

</div>

            `
        },
        videos: [
            {
                id: "1",
                name: "Customer Review: Definitely WORTH IT!!!",
                author: "Kendraty",
                video: "/videos/hyperx-review-1.mp4",
                date: "2024-01-12",
            },
            {
                id: "2",
                name: "Review at HyperX Cloud Alpha. The finest headphones!!!!!!",
                author: "ANDY",
                video: "/videos/hyperx-review-2.mp4",
                date: "2024-02-03",
            },
            {
                id: "3",
                name: "HyperX Cloud Alpha THE MOST AWESOME HEADPHONES",
                author: "BAIBI",
                video: "/videos/hyperx-review-3.mp4",
                date: "2024-02-18",
            },
            {
                id: "4",
                name: "HyperX Cloud Alpha Overview",
                author: "Kai",
                video: "/videos/hyperx-review-4.mp4",
                date: "2024-03-01",
            },
        ],
        productSpecifications: [
            {
                id: "asin",
                name: "ASIN",
                description: "B074NBSF9N",
            },
            {
                id: "release_date",
                name: "Release date",
                description: "September 25, 2017",
            },
            {
                id: "customer_reviews",
                name: "Customer Reviews",
                description: " 9,600 ratings",
                rating: 5,
            },
            {
                id: "best_sellers_rank",
                name: "Best Sellers Rank",
                description: "#633 in Video Games (See Top 100 in Video Games); #45 in PC Game Headsets",
            },
            {
                id: "pricing",
                name: "Pricing",
                description: "The strikethrough price is the List Price. Savings represents a discount off the List Price.",
            },
            {
                id: "product_dimensions",
                name: "Product Dimensions",
                description: "9.2 x 8.25 x 4.65 inches; 12 Ounces",
            },
            {
                id: "binding",
                name: "Binding",
                description: "Personal Computers",
            },
            {
                id: "item_model_number",
                name: "Item model number",
                description: "HX-HSCA-RD/AM",
            },
            {
                id: "is_discontinued",
                name: "Is Discontinued By Manufacturer",
                description: "No",
            },
            {
                id: "item_weight",
                name: "Item Weight",
                description: "12 ounces",
            },
            {
                id: "manufacturer",
                name: "Manufacturer",
                description: "Kingston Technology Company, Inc.",
            },
            {
                id: "country_of_origin",
                name: "Country of Origin",
                description: "China",
            },
            {
                id: "date_first_available",
                name: "Date First Available",
                description: "August 22, 2017",
            },
        ],
        productQuestions: [
            {
                id: "q_001",
                question: "Is this headset only stereo?",
                votes: 18,
                totalAnswerCount: 3,
                answers: [
                    {
                        id: "ans_001",
                        authorName: "Chris @HyperX",
                        createdAt: "2017-08-30T00:00:00.000Z",
                        text: "Hey ImJustMagik, Yes, the Cloud Alpha is stereo, but I highly recommend that you try pairing the USB Dolby 7.1 Adapter (from: http://hyperx.gg/cloudaccessories) with it for USB connectivity and Virtual Surround Sound for an amazing audio experience. Thank you! - Chris @HyperX",
                        isManufacturer: true
                    },
                    {
                        id: "ans_002",
                        authorName: "Bryan S.",
                        createdAt: "2021-07-21T00:00:00.000Z",
                        text: "Yes, but go into your system settings and select windows sonic not stereo. The windows sonic is better than the dolby. The dtsx is better than both but not free. The hyper x cloud alpha is the best headset ive ever used, so comfortable i forget in wearing them and the immersive spatial sounds puts you in the center of the sound (very easy to pinpoint enemies based off of there sounds).",
                        isManufacturer: false
                    },
                    {
                        id: "ans_003",
                        authorName: "Snook_King",
                        createdAt: "2021-04-28T00:00:00.000Z",
                        text: "If you're using it on an Xbox One you can pay 14.99 to buy the dolby atmos app and it's only a one time payment. That will give you the surround sound you're looking for with almost any stereo headset and it's extremely accurate as far as pinpointing footsteps and things of that nature. I have the Cloud Alphas and they're the best headphones I've had for gaming by a long shot and I've had a lot of different headsets. These are actually better than the Alphas so to me the price is actually totally wel worth it. Hope that helps",
                        isManufacturer: false
                    },
                    //TODO: У тебя не правильно коллапсы работают
                ]
            }
        ],
        documents: [
            {
                id: "1",
                name: "User Manual",
                download_link: "/docs/user-manual.pdf",
                extension: "PDF",
            },
            {
                id: "2",
                name: "Product Documentation",
                download_link: "/docs/product-documentation.pdf",
                extension: "PDF",
            },
            {
                id: "3",
                name: "Specification Sheet",
                download_link: "/docs/specification-sheet.pdf",
                extension: "PDF",
            },
        ],
        mentionTags: [
            "sound quality",
            "cloud alpha",
            "build quality",
            "ear cups",
            "stopped working",
            "noise cancellation",
            "gaming headset",
            "highly recommend",
            "surround sound",
            "volume control",
            "memory foam",
            "super comfortable",
            "pretty good"
        ],
        reviews: [[
            {
                id: "rev_001",
                rating: 5,
                title: "Definitely WORTH IT!!!",
                text: "Got this headset and wore it for quite some time! I absolutely love it. I hope my video review is helpful to you! :-)",
                editedText:
                    "EDIT: I noticed a lot of people forget... please make sure you're PLUGGING the cable ALL THE WAY IN ^_^",
                authorName: "Kingston",
                createdAt: "2017-10-16T00:00:00.000Z",
                isVerifiedPurchase: true,
                images: [],
                videos: ["review-video-1.mp4"],
                helpfulMarks: 953
            },
            {
                id: "rev_002",
                rating: 5,
                title: "Definitely WORTH IT!!!",
                text: "Got this headset and wore it for quite some time! I absolutely love it. I hope my video review is helpful to you! :-)",
                editedText:
                    "EDIT: I noticed a lot of people forget... please make sure you're PLUGGING the cable ALL THE WAY IN ^_^",
                authorName: "Kingston",
                createdAt: "2017-10-16T00:00:00.000Z",
                isVerifiedPurchase: true,
                images: ["review-image-1.jpg"],
                videos: [],
                helpfulMarks: 953
            },
            {
                id: "rev_003",
                rating: 5,
                title: "Best comfortable headphone ever",
                text: `I tried many headphones Astro A40, A50, AKG 7XX, Sony gold headset and planar... I got this just now. Once I open it and try it on I felt this headset are light and bit tight on ears. I feel no pain on ears or head level however this headset are so good that can beat the other headphones I owned. No joke Astro does have great sound but their headphones are very and won't feel comfortable after 3 hrs of gaming. I wear glasses to play so it will be a bit difficult. The bass and sound are great however if you guys want to boost up the sound on a console I suggest to have to buy an amp like astro to increase the sound if you willing to spend more I will go with Sound blaster X7. Have a good day reading I hope my words are helpful to anyone gaming headset. And once again thanks for reading 🙂`,
                authorName: "Jeremy Yuk",
                createdAt: "2017-09-26T00:00:00.000Z",
                isVerifiedPurchase: true,
                images: [
                    "review-image-2.jpg",
                    "review-image-3.jpg",
                    "review-image-4.jpg"
                ],
                videos: [],
                helpfulMarks: 953
            },
            {
                id: "rev_004",
                rating: 5,
                title: "Definitely WORTH IT!!!",
                text: `Son los segundos audífonos para gaming que adquiero, los primeros fueron uno gold headset de sony, y debo decir que los HyperX Cloud Alpha son excepcionales en comparación aparte de ser mucho mas durables por su estructura de aluminio, el sonido es claro y nítido, donde se pueden apreciar claramente donde se encuentran los sonidos, los pasos con Forza 7 con Doom, con Forza el audio te ayuda a envolverte mas en la experiencia de conducción, ya que puedes como, dice, escuchar la fuente del sonido, por ejemplo al poner la cámara desde la perspectiva del conductor, claramente puedes escuchar como el sonido de frenado y derrape de las llantas provienen de abajo, como si realmente estuvieras manejando dentro de un automóvil de carreras, en Doom que puedo decir, simplemente el sonido de la atmósfera te hace sentir la emoción al jugar, y mas cuando acabas con los demonios con los rugidos de tus armas.

                Los audífonos aíslan muy bien el ruido exterior, para que nada te saque de la inmersión de tus juegos, y uno de los puntos mas fuertes, es que son súper cómodos, con lo cual puedes jugar horas y horas sin que te cansen o te lastimen las orejas como otras que hay en el mercado de menor calidad. Ahora hablando del micrófono también es bueno, es claro, evita que tus amigos escuchen ruidos, cumple con su cometido a la hora de hacer las salas de juegos y platicar y divertirte con tus amigos, ademas que es removible lo cual los hace muy prácticos.
                
                Son unos audífonos geniales que no puedo mas que recomendarlos totalmente, por su calidad, por su precio, los convierten en una compra de la cual no te arrepentirás.`,
                authorName: "Kingston",
                createdAt: "2017-10-16T00:00:00.000Z",
                isVerifiedPurchase: true,
                images: [],
                videos: [],
                helpfulMarks: 953
            }], [
            {
                "id": "rev_004",
                "rating": 5,
                "title": "Definitely WORTH IT!!!",
                "text": "Son los segundos audífonos para gaming que adquiero, los primeros fueron uno gold headset de sony, y debo decir que los HyperX Cloud Alpha son excepcionales en comparación aparte de ser mucho mas durables por su estructura de aluminio, el sonido es claro y nítido, donde se pueden apreciar claramente donde se encuentran los sonidos, los pasos con Forza 7 con Doom, con Forza el audio te ayuda a envolverte mas en la experiencia de conducción, ya que puedes como, dice, escuchar la fuente del sonido, por ejemplo al poner la cámara desde la perspectiva del conductor, claramente puedes escuchar como el sonido de frenado y derrape de las llantas provienen de abajo, como si realmente estuvieras manejando dentro de un automóvil de carreras, en Doom que puedo decir, simplemente el sonido de la atmósfera te hace sentir la emoción al jugar, y mas cuando acabas con los demonios con los rugidos de tus armas.\n\n        Los audífonos aíslan muy bien el ruido exterior, para que nada te saque de la inmersión de tus juegos, y uno de los puntos mas fuertes, es that son súper cómodos, con lo cual puedes jugar horas y horas sin que te cansen o te lastimen las orejas como otras que hay en el mercado de menor calidad. Ahora hablando del micrófono también es bueno, es claro, evita que tus amigos escuchen ruidos, cumple con su cometido a la hora de hacer las salas de juegos y platicar y divertirte con tus amigos, ademas que es removible lo cual los hace muy prácticos.\n        \n        Son unos audífonos geniales que no puedo mas que recomendarlos totalmente, por su calidad, por su precio, los convierten en una compra de la cual no te arrepentirás.",
                "authorName": "Kingston",
                "createdAt": "2017-10-16T00:00:00.000Z",
                "isVerifiedPurchase": true,
                "images": [],
                "videos": [],
                "helpfulMarks": 953
            },
            {
                "id": "rev_002",
                "rating": 5,
                "title": "Definitely WORTH IT!!!",
                "text": "Got this headset and wore it for quite some time! I absolutely love it. I hope my video review is helpful to you! :-)",
                "editedText": "EDIT: I noticed a lot of people forget... please make sure you're PLUGGING the cable ALL THE WAY IN ^_^",
                "authorName": "Kingston",
                "createdAt": "2017-10-16T00:00:00.000Z",
                "isVerifiedPurchase": true,
                "images": [
                    "review-image-1.jpg"
                ],
                "videos": [],
                "helpfulMarks": 953
            },
            {
                "id": "rev_003",
                "rating": 5,
                "title": "Best comfortable headphone ever",
                "text": "I tried many headphones Astro A40, A50, AKG 7XX, Sony gold headset and planar... I got this just now. Once I open it and try it on I felt this headset are light and bit tight on ears. I feel no pain on ears or head level however this headset are so good that can beat the other headphones I owned. No joke Astro does have great sound but their headphones are very and won't feel comfortable after 3 hrs of gaming. I wear glasses to play so it will be a bit difficult. The bass and sound are great however if you guys want to boost up the sound on a console I suggest to have to buy an amp like astro to increase the sound if you willing to spend more I will go with Sound blaster X7. Have a good day reading I hope my words are helpful to anyone gaming headset. And once again thanks for reading 🙂",
                "authorName": "Jeremy Yuk",
                "createdAt": "2017-09-26T00:00:00.000Z",
                "isVerifiedPurchase": true,
                "images": [
                    "review-image-2.jpg",
                    "review-image-3.jpg",
                    "review-image-4.jpg"
                ],
                "videos": [],
                "helpfulMarks": 953
            },
            {
                "id": "rev_001",
                "rating": 5,
                "title": "Definitely WORTH IT!!!",
                "text": "Got this headset and wore it for quite some time! I absolutely love it. I hope my video review is helpful to you! :-)",
                "editedText": "EDIT: I noticed a lot of people forget... please make sure you're PLUGGING the cable ALL THE WAY IN ^_^",
                "authorName": "Kingston",
                "createdAt": "2017-10-16T00:00:00.000Z",
                "isVerifiedPurchase": true,
                "images": [],
                "videos": [
                    "review-video-1.mp4"
                ],
                "helpfulMarks": 953
            }
        ]
        ]
    };
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

    const ratingArray: boolean[] = Array.from({ length: 5 }, (_, i) => i < Math.round(exampleProduct.rating))

    //----====----====----====----====----====----====----====----====----//
    //reviews

    const [reviewsSwither, setReviewsSwither] = useState<boolean>(false);

    const [showAll, setShowAll] = useState(false);

    const reviews = reviewsSwither
        ? exampleProduct.reviews?.[0] ?? []
        : exampleProduct.reviews?.[1] ?? [];

    const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

    //----====----====----====----====----====----====----====----====----//

    return(
    <div>
        <div className="image_title_buy_container">
            <div className="images_container">
                {exampleProduct.images.map((image, index) => (
                    <div
                        key={"image-" + index}
                        className={selectedItemMarker === index ? "image_wrapper selected_image_wrapper" : "image_wrapper"}
                        onClick={() => setSelectedItemMarker(index)}
                    >
                        <Image src={image} alt={`Image ${index + 1}`} width={75} height={75}/>
                    </div>
                ))}
            </div>

            <div className="main_image_container">
                <div className="main_image_zoom">
                    <Image src={exampleProduct.images[selectedItemMarker]} alt="Main image" width={450} height={450}/>
                </div>
                <span className="zoom_hint">Roll over image to zoom in</span>
            </div>

            <div className="title_price_about_container">
                <h1 className="product_title">{exampleProduct.title}</h1>
                <div className="store_link">Visit the HyperX Store</div>

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
                    <span className="rating_text">{exampleProduct.ratings.toLocaleString()} ratings</span>
                </div>

                <div className="divider"></div>

                <div className="price_info">
                    <div className="stock_status">In Stock</div>
                    <div className="price_row">
                        <span className="price_label">Price:</span>
                        <span className="price_value">${exampleProduct.price}</span>
                    </div>
                    <p className="promo_text">
                        Pay ${ (exampleProduct.price / 6).toFixed(2) }/month for 6 months, interest-free upon approval for the Amazon Rewards Visa Card.
                        Available at a lower price from other sellers that may not offer free Prime shipping.
                    </p>
                </div>

                <div className="about_container">
                    <h2>About this item</h2>
                    <ul className="about_list">
                        {exampleProduct.about.split('\n').filter(line => line.trim()).map((line, i) => (
                            <li key={i}>{line.trim()}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="buy_container">
                <div className="buy_price">${exampleProduct.price}</div>

                <p className="shipping_text">
                    $47.21 Shipping & Import Fees Deposit to Ukraine <a href="#">Details</a>
                </p>

                <p className="delivery_text">
                    Delivery <strong>Thursday, February 17</strong>. Order within <a href="#">31 mins</a>
                </p>

                <div className="location_row">
                    <img src="./product_page/geomarker.svg" alt="marker" width={15} height={15}/>
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
                    <img src="./product_page/Secure.svg" alt="Secure" width={16} height={16}/>
                    <a href="#">Secure transaction</a>
                </div>
            </div>
        </div>

        <MoreToConsiderSection MoreToConsiderItemArray={exampleMoreToConsiderItemArray}/>

        <div className="offers_section">

            <h3>Special offers and product promotions</h3>

            <div className="offer_row">
                    <span>
                        Create your FREE Business account to save up to 10% with Business-only prices and free shipping
                    </span>
                <button className="apply_btn">Register today</button>
            </div>

            <div className="offer_row">
                    <span>
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

        {exampleProduct.fromTheManufacturer && <ManufacturerBlock content={exampleProduct.fromTheManufacturer}/>}


        <div className="description_container">
            <h3>Product Description</h3>
            <p>{exampleProduct.description}</p>
        </div>


        <div className="Specs_warranty_container"></div>

        <div className="product-details-container">
            <div className="left-column">
                <section className="product-description">
                    <h3>Product Description</h3>
                    <table className="specs-table">
                        <tbody>
                        {exampleProduct.productSpecifications?.map((item) => (
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
                        {exampleProduct.documents?.map((item) => (
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
                    {exampleProduct.videos?.map((video, index) => (
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

            {exampleProduct.productQuestions && (
                <AllQuestionsList allQuestions={exampleProduct.productQuestions} />
            )}
        </section>

        <section className="mentions-section">
            <h3>Read reviews that mention</h3>
            <div className="tags-container">
                {exampleProduct.mentionTags.map((tag, index) => (
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
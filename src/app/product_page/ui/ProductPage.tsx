import {ProductQuestion, ProductType, MoreToConsiderItem} from "@/app/product_page/types/product_page_types";
import Image from 'next/image';
import {useState} from "react";
import {MoreToConsiderItemCard} from "@/app/product_page/ui/MoreToConsiderItemCard";
import {ManufacturerBlock} from "@/app/product_page/ui/ManufacturerBlock";

export function CartPage () {
    const exampleProduct: ProductType = {
        id: "1",
        title: "Gaming Headset HyperX Cloud Alpha",
        price: 99.99,
        rating: 4.6,
        ratings: 9600,
        images: [
            "./product_page/408e07536ec727720b8e9f7a99befeb458e43fd8.jpg",
            "./product_page/459bbe3b3a1152c4bbd9628a545bc2b4d1a57c2f.png",
            "./product_page/6472bac230ec010f1b31a39da2129c65360e783b.png",
            "./product_page/dde6ee10bf1d6e0fa098f41b1f770b868012eb85.png",
            "./product_page/fa11b7f604c0d8a3c7a3b6a476be68dbbf34f6af.png"],
        videoid: "",
        platform: "PlayStation 4",
        storename: "HyperX",
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
      <div class="manufacturer-block">
        <h2>Видеообзор от производителя</h2>
        <p>Посмотрите, как работают функции смарт-часов X200:</p>
        <video src="" controls poster=""></video>
        <p>Особенности продукта:</p>
        <ul>
          <li>Мониторинг пульса и сна</li>
          <li>Поддержка уведомлений с телефона</li>
          <li>Водонепроницаемость 5 ATM</li>
        </ul>
      </div>
    `
        },
        videos: ["", ""],
        productQuestions: [
            {
                id: "q1",
                question: "Is this headset only stereo?",
                votes: 18,
                totalAnswerCount: 3,
                answers: [
                    {
                        id: "a1",
                        text: "Yes, the Cloud Alpha is stereo...",
                        authorName: "Chris @HyperX",
                        createdAt: "2017-08-30",
                        isManufacturer: true
                    },
                    {
                        id: "a2",
                        text: "Yes, but go into your system settings...",
                        authorName: "Bryan S.",
                        createdAt: "2021-07-21"
                    }
                ]
            }
        ]
    };

    const exampleMoreToConsiderItem: MoreToConsiderItem = {
        id: "hyperx-cloud-orbit-s-black",
        is_on_sale: true,
        favorite: true,
        image: "",
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

    const [selectedItemMarker, setSelectedItemMarker] = useState<number | null>(null);

    const ratingArray: boolean[] = Array.from({ length: 5 }, (_, i) => i < Math.round(exampleProduct.rating))

    return(
    <div>
        <div className="image_title_buy_container">
            {/*TODO: сделать через мап*/}
            <div className="images_container">
                {exampleProduct.images.map((image, index) => (
                    <div className="selected_image_wrapper">
                        <div className="image_container">
                            <Image src={image} alt={`Image ${index + 1}`} width={75} height={75}/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="main_image_container">
                <div className="main_image_zoom">
                    <Image src={exampleProduct.images[0]} alt="Main image" width={500} height={500}/>
                </div>
            </div>
            <span>Roll over image to zoom in</span>

            <div className="title_price_about_container">
                <h1>{exampleProduct.title}</h1>
                <div className="price_container">
                    <span className="price"></span>
                    <a href="">Visit the {exampleProduct.storename} store</a>
                    <span>Platform : {exampleProduct.platform}</span> <span></span>
                    <div className="ratings">
                        {ratingArray.map((filled, i) => (
                            <img
                                key={i}
                                src={filled ? '/filled_star.svg' : '/unfilled_star.svg'}
                                alt={filled ? 'filled star' : 'empty star'}
                                width={20}
                                height={20}
                            />
                        ))}
                        <span>{exampleProduct.ratings.toLocaleString()} {exampleProduct.ratings === 1 ? "rating" : "ratings"}</span>
                    </div>
                    <span>
                        Pay ${exampleProduct.price/6}/month for 6 months, interest-free upon approval for the Amazon Rewards Visa Card
                        Available at a lower price from other sellers that may not offer free Prime shipping.
                    </span>
                    <div className="about_container">
                        <h2>About this item</h2>
                        <p>{exampleProduct.about}</p>
                    </div>
                </div>
            </div>

            <div className="buy_container">
                <h2>{exampleProduct.price}</h2>
                <button className="buy_button">Add to cart</button>
                $47.21 Shipping & Import Fees Deposit to Ukraine <a href="">Details</a>
                Delivery Thursday, February 17 Order within <a href="">31 mins</a>

                <img src="./product_page/geomarker.svg" alt="geomarker" width={20} height={20}/>
                <span>Select delivery location</span>

                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>

                <button><span>Add to Card</span></button>
                <button><span>Buy Now</span></button>

                <img src="./product_page/Secure.svg" alt="Secure transaction"/>
                <span>Secure transaction</span>
            </div>

        </div>

        <span>More to consider from our brands</span>

        <button><img src="./product_page/to_the_left.svg" alt=""/></button>
        {exampleMoreToConsiderItemArray.map((item, index) => (
            <MoreToConsiderItemCard item={item} key={"MoreToConsiderItem_" + index}/>
        ))}
        <button><img src="./product_page/to_the_right.svg" alt=""/></button>

        <h3>Special offers and product promotions</h3>

        <span>Create your FREE Business account to save up to 10% with Business-only prices and free shipping</span>
        <a href="#">Register today</a>
        <span>Your cost could be $49.99 instead of $99.99! Get a $50 Amazon Gift Card instantly upon approval for the Amazon Rewards Visa Card</span>
        <button>Apply now</button>

        <h3>Have a question?</h3>
        <span>Find answers in product info, Q&As, reviews</span>

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

        <h3>Product Description</h3>
        <p>{exampleProduct.description}</p>

    </div>
    )
}
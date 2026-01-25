// import { useHeader } from '../model/useHeader';
import '@/widgets/header/css/header.css'

export function Header() {
    // const {user, onLogout, menuItems} = useHeader();
    return (
        <header>
            <div className='headerTopSection'>
                <svg width="109" height="62" viewBox="0 0 109 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3404_3470)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.676 4.09165C30.676 4.09126 30.6756 4.09094 30.6752 4.09094H22.4949C22.4945 4.09094 22.4941 4.09126 22.4941 4.09165C22.4941 4.09204 22.4938 4.09236 22.4934 4.09236H9.20437C8.63953 4.09236 8.18164 4.55025 8.18164 5.11509C8.18164 5.67993 8.63953 6.13782 9.20437 6.13782H20.4487C21.5784 6.13782 22.4941 7.0536 22.4941 8.18327V20.4546C22.4941 22.7139 24.3257 24.5455 26.585 24.5455C28.8444 24.5455 30.676 22.7139 30.676 20.4546V8.18327C30.676 7.0536 31.5917 6.13782 32.7214 6.13782H43.9771C44.5419 6.13782 44.9998 5.67993 44.9998 5.11509C44.9998 4.55025 44.5419 4.09236 43.9771 4.09236H30.6767C30.6763 4.09236 30.676 4.09204 30.676 4.09165Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.676 49.0902C30.676 49.0906 30.6756 49.0909 30.6752 49.0909H22.4949C22.4945 49.0909 22.4941 49.0906 22.4941 49.0902C22.4941 49.0898 22.4938 49.0895 22.4934 49.0895H19.4309C18.8661 49.0895 18.4082 48.6316 18.4082 48.0668C18.4082 47.502 18.8661 47.0441 19.4309 47.0441H20.4512C21.5795 47.0441 22.4941 46.1294 22.4941 45.0011V32.7273C22.4941 30.468 24.3257 28.6364 26.585 28.6364C28.8444 28.6364 30.676 30.468 30.676 32.7273V44.9986C30.676 46.1283 31.5917 47.0441 32.7214 47.0441H33.7491C34.3139 47.0441 34.7718 47.502 34.7718 48.0668C34.7718 48.6316 34.3139 49.0895 33.7491 49.0895H30.6767C30.6763 49.0895 30.676 49.0898 30.676 49.0902Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1348 4.09165C51.1348 4.09126 51.1351 4.09094 51.1355 4.09094H59.3159C59.3163 4.09094 59.3166 4.09126 59.3166 4.09165C59.3166 4.09204 59.3169 4.09236 59.3173 4.09236H62.3819C62.9468 4.09236 63.4047 4.55025 63.4047 5.11509C63.4047 5.67993 62.9468 6.13782 62.3819 6.13782H61.3606C60.2317 6.13782 59.3166 7.05296 59.3166 8.18185V15.5492C59.3166 16.0104 59.4724 16.458 59.7588 16.8194L72.0784 32.3697C72.8973 33.4034 74.466 33.4034 75.2849 32.3697L87.5051 16.9449C87.7914 16.5835 87.9473 16.1359 87.9473 15.6747V8.18327C87.9473 7.0536 87.0315 6.13782 85.9018 6.13782H84.8762C84.3114 6.13782 83.8535 5.67993 83.8535 5.11509C83.8535 4.55025 84.3114 4.09236 84.8762 4.09236H87.9466C87.9469 4.09236 87.9473 4.09204 87.9473 4.09165C87.9473 4.09126 87.9476 4.09094 87.948 4.09094H96.1284C96.1288 4.09094 96.1291 4.09126 96.1291 4.09165C96.1291 4.09204 96.1294 4.09236 96.1298 4.09236H99.1944C99.7593 4.09236 100.217 4.55025 100.217 5.11509C100.217 5.67993 99.7593 6.13782 99.1944 6.13782H98.1731C97.0442 6.13782 96.1291 7.05296 96.1291 8.18185V45.0014C96.1291 46.1303 97.0442 47.0455 98.1731 47.0455H99.1944C99.7593 47.0455 100.217 47.5034 100.217 48.0682C100.217 48.6331 99.7593 49.0909 99.1944 49.0909H96.1291H87.9473H84.8762C84.3114 49.0909 83.8535 48.6331 83.8535 48.0682C83.8535 47.5034 84.3114 47.0455 84.8762 47.0455H85.9018C87.0315 47.0455 87.9473 46.1297 87.9473 45V25.96C87.9473 24.0216 85.5022 23.1705 84.2985 24.6899L75.2849 36.0672C74.466 37.1009 72.8973 37.1009 72.0784 36.0672L62.9653 24.5643C61.7616 23.045 59.3166 23.8961 59.3166 25.8345V45.0014C59.3166 46.1303 60.2317 47.0455 61.3607 47.0455H62.382C62.9469 47.0455 63.4047 47.5034 63.4047 48.0682C63.4047 48.6331 62.9468 49.0909 62.382 49.0909H59.3166H51.1348H48.0638C47.499 49.0909 47.0411 48.6331 47.0411 48.0682C47.0411 47.5034 47.499 47.0455 48.0638 47.0455H49.0893C50.219 47.0455 51.1348 46.1297 51.1348 45V8.18327C51.1348 7.0536 50.219 6.13782 49.0893 6.13782H48.0637C47.4989 6.13782 47.041 5.67993 47.041 5.11509C47.041 4.55025 47.4989 4.09236 48.0637 4.09236H51.1341C51.1344 4.09236 51.1348 4.09204 51.1348 4.09165Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_3404_3470" x="-0.000177383" y="3.33786e-05" width="108.399" height="61.3636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4.09091"/>
                            <feGaussianBlur stdDeviation="4.09091"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3404_3470"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3404_3470" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <button className='geoMarker headerButton'>
                    <span className='headerIcon'>
                        <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_3398_5894)">
                            <path d="M14 2C8.47143 2 4 6.2255 4 11.45C4 15.7652 7.70687 21.3314 10.6068 25.0257C12.3666 27.2676 15.6333 27.2676 17.3932 25.0257C20.2931 21.3314 24 15.7652 24 11.45C24 6.2255 19.5286 2 14 2ZM14 14.825C12.0286 14.825 10.4286 13.313 10.4286 11.45C10.4286 9.587 12.0286 8.075 14 8.075C15.9714 8.075 17.5714 9.587 17.5714 11.45C17.5714 13.313 15.9714 14.825 14 14.825Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_3398_5894" x="0" y="0" width="28" height="32.707" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3398_5894"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3398_5894" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </span>
                    <span className='headerText'>
                        <span >Deliver to</span>
                        <span >Ukraine</span>
                    </span>
                </button>

                <div className='searchForm'>
                    <button className='searchFormButton'>All</button>
                    <form className='form' role="search">
                        <input
                          className='formInput'
                            id="search"
                            name="q"
                            type="search"
                        />
                        <button className='formSubmitButton' type='submit'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_607_12180)">
                                    <path d="M14.2635 22.526C16.2447 22.5256 18.1762 21.9485 19.8261 20.8748C20.2496 20.5992 20.8147 20.629 21.172 20.9863L25.4788 25.293C25.8694 25.6835 26.5025 25.6834 26.893 25.293L27.2928 24.8931C27.6834 24.5026 27.6834 23.8694 27.2928 23.4789L22.9863 19.1725C22.6288 18.8152 22.5991 18.25 22.8749 17.8264C23.9492 16.1763 24.5266 14.2445 24.5271 12.263C24.5271 6.60423 19.9226 2 14.2635 2C8.60448 2 4 6.60423 4 12.263C4 17.9217 8.60448 22.526 14.2635 22.526ZM14.2635 4.56575C18.5088 4.56575 21.9612 8.01796 21.9612 12.263C21.9612 16.508 18.5088 19.9602 14.2635 19.9602C10.0183 19.9602 6.56588 16.508 6.56588 12.263C6.56588 8.01796 10.0183 4.56575 14.2635 4.56575Z" fill="#828282"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_607_12180" x="0" y="0" width="31.5859" height="31.5858" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_12180"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_12180" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </form>
                </div>
                <button className='headerButton'>
                    <span className='headerText'>
                        <span>Hello, Sign in</span>
                        <span>Account</span>
                    </span>
                </button>
                <button className='headerButton'>
                    <span className='headerText'>
                        <span>Returns</span>
                        <span> & Orders</span>
                    </span>
                </button>
                <button className='cartButton'>
                    <div className="cart">
                        <svg className="cart-icon" width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_607_11731)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H7.32171C8.10181 2 8.81072 2.45358 9.13763 3.16188L9.38244 3.69231H27.4308C28.949 3.69231 29.9136 5.31727 29.1866 6.65001L25.2006 13.9577C24.8502 14.6002 24.1767 15 23.4448 15H13.5191L11.7345 17.2308L26.5769 17.2308C27.1292 17.2308 27.5769 17.6785 27.5769 18.2308C27.5769 18.7831 27.1292 19.2308 26.5769 19.2308H11.7345C10.0575 19.2308 9.12511 17.2909 10.1727 15.9814L11.8715 13.8579L7.83464 5.11137L7.32171 4H5C4.44772 4 4 3.55228 4 3ZM13.6783 13H23.4448L27.4308 5.69231H10.3055L13.6783 13ZM16.2308 22.881C16.2308 24.0493 15.2837 24.9964 14.1154 24.9964C12.9471 24.9964 12 24.0493 12 22.881C12 21.7127 12.9471 20.7656 14.1154 20.7656C15.2837 20.7656 16.2308 21.7127 16.2308 22.881ZM23.4279 24.9964C24.5962 24.9964 25.5433 24.0493 25.5433 22.881C25.5433 21.7127 24.5962 20.7656 23.4279 20.7656C22.2596 20.7656 21.3125 21.7127 21.3125 22.881C21.3125 24.0493 22.2596 24.9964 23.4279 24.9964Z" fill="white"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_607_11731" x="0" y="0" width="33.4336" height="30.9963" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_11731"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_11731" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    <span className="cart-badge">2</span>
                    </div>
                </button>
            </div>
            <div className='headerBottomSection'>
                <button className='buttonMore'>
                    <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1313_28600)">
                            <rect x="4" y="2" width="32" height="5" rx="2" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_1313_28600)">
                            <rect x="4" y="11" width="32" height="5" rx="2" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_1313_28600)">
                            <rect x="4" y="20" width="32" height="5" rx="2" fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_1313_28600" x="0" y="0" width="40" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1313_28600"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1313_28600" result="shape"/>
                            </filter>
                            <filter id="filter1_d_1313_28600" x="0" y="9" width="40" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1313_28600"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1313_28600" result="shape"/>
                            </filter>
                            <filter id="filter2_d_1313_28600" x="0" y="18" width="40" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1313_28600"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1313_28600" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <div className='linksGroup'>
                    <a href="">
                        <p>Today's Deals</p>
                    </a>
                    <a href="">
                        <p>Customer Service</p>
                    </a>
                    <a href="">
                        <p>Registry</p>
                    </a>
                    <a href="">
                        <p>Gift Cards</p>
                    </a>
                    <a href="">
                        <p>Sell</p>
                    </a>
                </div>
            </div>
        </header>
    )
}
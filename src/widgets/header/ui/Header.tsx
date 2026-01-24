import { useHeader } from '../model/useHeader';
import '../css/header.css'

export function Header() {
    // const {user, onLogout, menuItems} = useHeader();
    return (
        <header>
            <div>
                <img src="/public/headerLogo.svg" alt="Logo"/>
                <button>
                    <p>Deliver to</p>
                    <p>Ukraine</p>
                </button>
                <form role="search">
                    <div>All</div>
                    <input
                        id="search"
                        name="q"
                        type="search"
                    />
                    <button type='submit'>
                        <img src="/public/Search.svg" alt="search"/>
                    </button>

                </form>
                <button>
                    <p>Hello, Sign in</p>
                    <p>Account</p>
                </button>
                <button>
                    <p>Returns</p>
                    <p> & Orders</p>
                </button>

                <button>
                    <div>2</div>
                    <img src="/shopping-cart.svg" alt="shopping cart"/>
                </button>
            </div>
            <div>
                <button>
                    <img src="/public/more.svg" alt="more.."/>
                </button>
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
        </header>
    )
}
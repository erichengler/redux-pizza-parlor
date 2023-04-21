import { useSelector } from 'react-redux';
import './Header.css';

function Header () {

    const cartTotal = useSelector(store => store.cartTotal);

    return(
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <div className='cart-total'>Total: ${cartTotal.toFixed(2)}</div>
            </header>
        </>
    )
}

export default Header;
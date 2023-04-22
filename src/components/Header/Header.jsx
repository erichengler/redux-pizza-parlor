import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header () {

    const cartTotal = useSelector(store => store.cartTotal);

    const history = useHistory();

    const backToHome = () => {
        history.push('/');
    }

    return(
        <>
            <header className='App-header'>
                <h1 className='App-title' onClick={backToHome}>
                        Prime Pizza
                </h1>
                <div className='cart-total'>
                    Total: ${cartTotal.toFixed(2)}
                </div>
            </header>
        </>
    )
}

export default Header;
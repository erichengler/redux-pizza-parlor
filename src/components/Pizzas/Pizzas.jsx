import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import './Pizzas.css';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Pizzas() {
  const dispatch = useDispatch();
  const cartTotal = useSelector(store => store.cartTotal);
  const history = useHistory();

  const nextPage = () => {
    if (cartTotal === 0) {
      alert(`Please select a Pizza! :D`)
      return;
    } else {
      history.push('/customer-form')
    }
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios.get('/api/pizza').then((response) => {
      const action = { type: 'SET_PIZZAS', payload: response.data };
      dispatch(action);
    }).catch((error) => {
      console.log(`Error in fetchPizzas: ${error}`);
      alert(`It'sa no bueno!`);
    })
  };

  return (
    <>
      <ProgressBar currentStep={0}/>
      <h2 className="menuHeader">Our Menu</h2>
      <PizzaList /><br />
      <div className="nextButton">
        <Button
          variant="outlined"
          onClick={nextPage}>
          Next Page
        </Button>
      </div>
      <br /><br />
    </>
  )
}

export default Pizzas;
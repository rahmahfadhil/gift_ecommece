import './App.css';
import AppBar from './appbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FirstPage from './firstpage/firstpage.js';
import Footer from './footer'
import CategoriesItems from './categoresitems/categoriesitems'
import Favourite from './favourite/favourite'

import Login from './login/login'
import Cart from './cart/cart'
import { useState, useEffect } from 'react'
function App() {
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'pink flower',
      image: 'flowe1.jpg',
      price: '$20'
    },
    {
      id: '2',
      title: 'white flower',
      image: 'flowe1.jpg',
      price: '$10'
    }
  ]);
  const [itemcart, setItemcart] = useState([]);
  const [itemfavourites, setItemfavourites] = useState([]);

const handelAddItemToFavourite=async (id,title,image,price,quantity)=>{
  if (id !== undefined) {
    const items = await { id, title, image, price, quantity }
    setItemfavourites([...itemfavourites, items])
  }
}
  const handelAddItemToCart = async (id, title, image, price, quantity) => {
    if (id !== undefined) {
      const items = await { id, title, image, price, quantity }
      setItemcart([...itemcart, items])
    }


  }

  useEffect(() => {
    handelAddItemToFavourite();
    handelAddItemToCart();
  }, [])
  console.log(`rahma ${itemfavourites}`)
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />

        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/categories-items/:categoryName">
            <CategoriesItems value={{ items, setItems, handelAddItemToCart ,handelAddItemToFavourite}} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart" >
            <Cart value={{ itemcart, items }} />
          </Route>
          <Route path="/favourite">
            <Favourite  value={{ itemfavourites }} />
          </Route>

        </Switch>
        <Footer />



      </BrowserRouter>
    </div>
  );
}

export default App;

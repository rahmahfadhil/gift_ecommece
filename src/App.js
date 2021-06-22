import './App.css';
import AppBar from './appbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FirstPage from './firstpage/firstpage.js';
import Footer from './footer'
import CategoriesItems from './categoresitems/categoriesitems'
import Login from './login/login'
import Cart from './cart/cart'
import { useState ,useEffect } from 'react'
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
  const [itemcart,setItemcart] = useState([]);
 
  const handelAddItemToCart= async(id,title,image,price,quantity)=>{
    const  items=await {id,title,image,price,quantity}
   setItemcart( [...itemcart,items])
    
  }
  useEffect(()=>{
    
    handelAddItemToCart();
  },[])
  console.log(`rahma ${itemcart}`)
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />

        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/categories-items">
            <CategoriesItems value={{items, setItems,handelAddItemToCart}} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart" >
            <Cart value={{itemcart,items}} />
          </Route>

        </Switch>
        <Footer />



      </BrowserRouter>
    </div>
  );
}

export default App;

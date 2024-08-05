import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Navbar from "./Comp/Navbar";
import { useEffect, useState } from "react";
import Hompage from "./Comp/Hompage";
import Cart from "./Comp/Cart";
import Singin from "./Comp/Singin";
import SingleProduct from "./Comp/SingleProduct";
import Wishlist from "./Comp/Wishlist";

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  const[product , setProduct] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
      return res.json()
    }).then((data)=>{
      setProduct(data)
    })
  },[])
  return ( 
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Singin/>}/>
          <Route path="/homepage" element={<Hompage productData={product}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;
import React from "react"
import Intro from "./intro/intro"
import Products from "./products/products";
import Seller from "./seller/seller";

const Tienda = ()=> {
    return(
        <div>
            <Intro/>
            <Products/>
            <Seller/>
        </div>
    );
}

export default Tienda;
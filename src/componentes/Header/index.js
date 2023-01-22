import { BoxIconElement } from "boxicons";
import React from "react";
import Nike from "../../images/Nike.jpg";


export const Header = () => {
  return (
    <header> 
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <a href="#">
         <div className="logo">
            <img src={Nike} alt="logo" width="150"></img>

         </div>
            
                  </a>
                  <ul>
                    <li>
                      <a href="#">INICIO</a>
                    </li>
                    <li>
                      <a href="#">PRODUCTOS</a>
                    </li>
                  </ul>
                  <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item_total"></span>
                  </div>

    </header>
  )
}


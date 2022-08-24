import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import { useState } from "react";
import {  Dropdown, Link} from "./stylde.js"
import './Header.css'


function Header(){

    let none = {
      display: "none",
    };
    let block = {
      display: "block",
      position: "absolute",
      right:'10px',
      backgroundColor: " #f1f1f1",
      width: "260px",
      overflow: "auto",
      boxShadow: " 0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: 1,
      
    };
    const [toggle, setToggle] = useState(true);
    const [style, setStyle] = useState(none);
    function toggleMenu() {
      setToggle((toggle) => !toggle);
      if (toggle === true) {
        setStyle(none);
      } else {
        setStyle(block);
      }
    }

return(
  <div>
    <header>
      <div className="container">
         <div className="navbar">
            <div className="logo">
               <NavLink style={{color:'black',textDecoration:"none", display:'flex', letterSpacing: '2px'}} to="/home"><h1>MEDIAPARK</h1></NavLink>
            </div>
            <div className="menu">
            <Dropdown>
           <button onClick={toggleMenu}> <img src="https://img.icons8.com/ios-filled/50/000000/ringer-volume.png"/> Каталог</button>
           <div style={style}>
            <Link href="#">Телевизоры</Link>
            <Link href="#">Телефоны</Link>
            <Link href="#">Ноутбуки</Link>
            <Link href="#">Техника для дома</Link>
          </div>
           </Dropdown>
            </div>
            <div className="inp">
              <input type="text"  placeholder="Mobile Phones"/>
            </div>
            <div className="reg">
                <h1>Войти</h1>
                 <h1>Корзина</h1>
            </div>
            <div className="tel">
                <h2>(71)203 33 33</h2>
            </div>
         </div>
         
      </div>
    </header>
    <main>
      <Outlet/>
    </main>
  </div>
)


}

export default Header


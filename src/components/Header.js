import "./Header.css";

import React from "react";

function Header({ user }) {
     const { name, status } = user;
     return (
       <header className="Header">
         <h1 className="Header__name">{name}</h1>
         <p className="Header__status">{status}</p>
</header> );
}
export default Header;
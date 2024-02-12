import React from "react";

const Header = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <div style={{ height: "5%", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206510918830399508/logo.png?ex=65dc45da&is=65c9d0da&hm=cb02fa049941b5ef37b3b8c80a18a111120e624e561b060a291610db04e47fde&=&format=webp&quality=lossless&width=150&height=62"
          style={{ width: "13%", height: "10%" }}
        />
        <div
          style={{
            width: "30%",
            height: "auto",
            borderRadius: "8px",
            border: "1px solid rgba(227, 227, 227, 1)",
            padding: "10px 16px",
            margin: "8px",
            background: "rgba(238, 238, 238, 1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{
              flex: "1",
              border: "none",
              outline: "none",
              background: "transparent",
            }}
            placeholder="Search for brand, categories and coupons"
          />
        </div>
        <button
          style={{
            width: "10%",
            height: "15%",
            borderRadius: "8px",
            padding: "12px 16px",
            margin: "8px",
            backgroundColor: "rgba(240, 28, 33, 1)",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          LOGIN/SIGNUP
        </button>
      </div>
      {/* component for the navbar  */}
      <div style={{marginTop:"20px"}}>
      <nav
      style={{
        width: "100%",
        height: "44px",
        backgroundColor: "rgba(9, 20, 49, 1)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 8px",
        boxSizing: "border-box",
      }}
    >
      <a
        href="#home"
        style={{ color: "white", textDecoration: "none", marginRight: "8px" }}
      >
        Home
      </a>
      <a
        href="#deals"
        style={{ color: "white", textDecoration: "none", marginRight: "8px" }}
      >
        Deals
      </a>
      <a
        href="#coupons"
        style={{ color: "white", textDecoration: "none", marginRight: "8px" }}
      >
        Coupons
      </a>
      <a
        href="#store"
        style={{ color: "white", textDecoration: "none", marginRight: "8px" }}
      >
        Store
      </a>
      <a
        href="#contactus"
        style={{ color: "white", textDecoration: "none" }}
      >
        Contact Us
      </a>
    </nav>
      </div>
      {/* conatier for the image as well */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px"}}>
      <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206517496929193985/image_1.png?ex=65dc4bfb&is=65c9d6fb&hm=9c5dda473ebf6d41d0402cd7bb94f11bd4f96f18eec31330f44b6ecb60aa5e71&=&format=webp&quality=lossless&width=1075&height=517"
          style={{
            maxWidth: "100%",
            maxHeight: "441.22px",
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
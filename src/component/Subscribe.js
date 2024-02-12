import React from "react";

const Subscribe = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "whitesmoke",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius:"40px",
          flexWrap: "wrap",
          width: "80%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206570672252522536/form-img.png?ex=65dc7d81&is=65ca0881&hm=1828b6ec5c6dd8d3c48f8f0674e2de41cc67fd7df81e4730c6eeb600ee96059f&=&format=webp&quality=lossless&width=525&height=500"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "auto",
            height: "auto",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "35px",
              color: "rgba(9, 20, 49, 1)",
              marginLeft: "8%",
            }}
          >
            Subscribe To Our NewLetter
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: "24px",
              color: "rgba(135, 135, 135, 1)",
              marginLeft: "8%",
              marginTop:"6%",
              marginBottom:"6%"
            }}
          >
            Be the first to get exculsive offer and latest news
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "8px",
              border: "1px solid rgba(227, 227, 227, 1)",
              padding: "15px 16px",
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
          </div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "rgba(240, 28, 33, 1)",
              color: "white",
              borderRadius: "8px",
              border: "rgba(240, 28, 33, 1)",
              width:"120px",
              marginLeft:"7%",
              marginTop:"10px"
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";

const Popular = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginBottom:"50px"}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          width:"100%"
        }}
      >
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206564760473042965/image_10.png?ex=65dc77ff&is=65ca02ff&hm=69436305c6bd56a435d6a564ec70210259f07e6312b6cf89ce9b9847a71dbf23&=&format=webp&quality=lossless&width=1075&height=265"
          style={{
            width: "90%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "24px",
            color: "rgba(9, 20, 49, 1)",
          }}
        >
          Popular Membership
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          width:"100%"
        }}
      >
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206566323388424202/offers.png?ex=65dc7974&is=65ca0474&hm=6e7a637330e559786440e7d96bb8b2848398d974938bbbc879338adfe16bc220&=&format=webp&quality=lossless&width=593&height=593"
          style={{
            width: "90%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Popular;

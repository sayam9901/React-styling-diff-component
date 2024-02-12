import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgba(9, 20, 49, 1)",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "40px",
          flexWrap: "wrap",
          width: "80%",
          backgroundColor: "rgba(9, 20, 49, 1)",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column",justifyContent:"space-between"}}>
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206510918830399508/logo.png?ex=65dc45da&is=65c9d0da&hm=cb02fa049941b5ef37b3b8c80a18a111120e624e561b060a291610db04e47fde&=&format=webp&quality=lossless&width=150&height=62"
          style={{ width: "150px", height: "80px",color:"white"}}
        />
        <div style={{color:"white",width: "250px",}}>Lorem Ipsum is simply dummy of the printing and type setting.</div>
        <button
            style={{
            //   padding: "20px 85px",
              backgroundColor: "white",
            //   color: "white",
              borderRadius: "8px",
              border: "rgba(240, 28, 33, 1)",
              width:"120px",
            //   marginLeft:"7%",
              marginTop:"10px",
              cursor: "pointer",
              display:"flex"
            }}
          >
            <img src="https://media.discordapp.net/attachments/878640088446271509/1206619690978377758/image_64_1.png?ex=65dcab28&is=65ca3628&hm=e0e58e2eee86c5d44a6895b5061b0315a896548ca7ff4d067f94ccff40bde6ce&=&format=webp&quality=lossless&width=40&height=40"
            style={{maxWidth:"100%"}}
            />
            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{color: "rgba(135, 135, 135, 1)",}}>Download with
               </div>
               <div>playstore</div>
            </div>
          </button>
          <button
            style={{
            //   padding: "20px 85px",
              backgroundColor: "white",
            //   color: "white",
              borderRadius: "8px",
              border: "rgba(240, 28, 33, 1)",
              width:"120px",
            //   marginLeft:"7%",
              marginTop:"10px",
              cursor: "pointer",
              display:"flex"
            }}
          >
            <img src="https://media.discordapp.net/attachments/878640088446271509/1206619691204739142/image_64.png?ex=65dcab28&is=65ca3628&hm=65e4923c67becd62a74ae9bb487612f11e98541b0aeb77216dc5870d2c5cd44d&=&format=webp&quality=lossless&width=40&height=40"
            style={{maxWidth:"100%"}}
            />
            <div style={{display:"flex",flexDirection:"column"}}>
               <div style={{color: "rgba(135, 135, 135, 1)",}}>Download with
               </div>
               <div>App Store</div>
            </div>
          </button>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"180px"}}>
         <h1 style={{fontWeight:"600",fontSize:"12px",color:"rgba(240, 28, 33, 1)"}}>COMPANY</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>About Us</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Privacy Policy</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Terms</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Blogs</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Branding</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Carrer</h1>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"180px"}}>
         <h1 style={{fontWeight:"600",fontSize:"12px",color:"rgba(240, 28, 33, 1)"}}>GENERALS</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Partner with us</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Write to us</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Mobile App</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Site map</h1>

        </div>
        <div style={{display:"flex",flexDirection:"column",height:"180px"}}>
         <h1 style={{fontWeight:"600",fontSize:"12px",color:"rgba(240, 28, 33, 1)"}}>PAGES</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Amazon Offer</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Google Pay Offer</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Paypal Offers</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>PhonePe pffer</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>festival offers</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Bank offer</h1>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"180px"}}>
         <h1 style={{fontWeight:"600",fontSize:"12px",color:"rgba(240, 28, 33, 1)"}}>MORE</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>City Offer</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Brand Offer</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Product Deals</h1>
         <h1 style={{fontWeight:"500",fontSize:"10px",color:"white"}}>Gift Card</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

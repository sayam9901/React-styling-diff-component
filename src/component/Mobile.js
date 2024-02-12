import React from "react";

const Mobile = () => {
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
        marginTop:"200px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          flexWrap: "wrap",
          width: "80%",
          backgroundColor: "rgba(255, 192, 203, 0.5)",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
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
              color: "rgba(240, 28, 33, 1)",
              marginLeft: "8%",
            }}
          >
            Wanted To Be A Part Of Our Team
          </div>
          <div style={{color:"black",fontWeight:"400",fontSize:"16px",marginLeft: "8%",}}>Be a part of Best Side of discount Coupon</div>
          <div style={{display:"flex",justifyContent:"flex-start",marginTop:"30px"}}>
          <button
            style={{
            //   padding: "20px 85px",
              backgroundColor: "white",
            //   color: "white",
              borderRadius: "8px",
              border: "rgba(240, 28, 33, 1)",
              width:"120px",
            //   marginLeft:"7%",
            //   marginTop:"10px",
              cursor: "pointer",
              marginLeft:"40px",
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
            //   marginTop:"10px",
            marginLeft:"40px",
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

        </div>
         <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206603253022724116/Phone_2.png?ex=65dc9bd9&is=65ca26d9&hm=4f5b40c8fd38ebf1737722dfa36813df558559f6a4fa4f677123ce0bb80fc811&=&format=webp&quality=lossless&width=270&height=402"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "8%",
            marginBottom: "2%",
          }}
        />
        <img
          src="https://media.discordapp.net/attachments/878640088446271509/1206603253022724116/Phone_2.png?ex=65dc9bd9&is=65ca26d9&hm=4f5b40c8fd38ebf1737722dfa36813df558559f6a4fa4f677123ce0bb80fc811&=&format=webp&quality=lossless&width=270&height=402"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "2%",
            marginLeft:"8%",
            marginBottom: "2%",
          }}
        />
      </div>
    </div>
  );
};

export default Mobile;

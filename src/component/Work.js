import React, { useState, useEffect } from 'react';

const Work = () => {
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setContainerWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "24px",
            color: "rgba(9, 20, 49, 1)",
          }}
        >
          How It Works ?
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width:"80%",
          flexWrap:"wrap",
          marginTop:"40px"
        }}
      >
        <div
          style={{
            width: "calc(100% - 20px)",
            maxWidth: "290px",
            height: "238px",
            borderRadius: "16px",
            border: "1px solid rgba(236, 236, 236, 1)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            padding: "24px 16px",
            marginBottom: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-evenly",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* Card content goes here */}
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="https://media.discordapp.net/attachments/878640088446271509/1206590412375072798/icon_2.png?ex=65dc8fe3&is=65ca1ae3&hm=d043edf9286103ca7473e17097c38e6e29b7761c3071f4f45641adca89294757&=&format=webp&quality=lossless&width=71&height=70"/></div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"black",fontWeight:"600"}}>SignUp</div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there</div>
        </div>
        <div
          style={{
            width: "calc(100% - 20px)",
            maxWidth: "290px",
            height: "238px",
            borderRadius: "16px",
            border: "1px solid rgba(236, 236, 236, 1)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            padding: "24px 16px",
            marginBottom: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* Card content goes here */}
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="https://media.discordapp.net/attachments/878640088446271509/1206590412614144000/icon_1.png?ex=65dc8fe3&is=65ca1ae3&hm=c35097d28070c6b221a14fb046e88d6e247689ecc79e04cafa1caa6524fe59c7&=&format=webp&quality=lossless&width=70&height=70"/></div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"black",fontWeight:"600"}}>Choose Coupon</div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there</div>
        </div>
        <div
          style={{
            width: "calc(100% - 20px)",
            maxWidth: "290px",
            height: "238px",
            borderRadius: "16px",
            border: "1px solid rgba(236, 236, 236, 1)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            padding: "24px 16px",
            marginBottom: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* Card content goes here */}
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="https://media.discordapp.net/attachments/878640088446271509/1206590413029245009/icon.png?ex=65dc8fe3&is=65ca1ae3&hm=1726bcc3ec68bc7fe6f5600c21b8be4ad8279bf048447ce5eae9be3a30375f28&=&format=webp&quality=lossless&width=71&height=70"/></div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"black",fontWeight:"600"}}>Grab Coupon</div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there</div>
        </div>

      </div>
      {
        containerWidth>=1105 &&(
            <div style={{display:"flex",justifyContent:"space-between",width:"40%",marginTop:"-200px"}}>
            <img src="https://media.discordapp.net/attachments/878640088446271509/1206596733224886322/Vector_1.png?ex=65dc95c6&is=65ca20c6&hm=d85cd0b29c7ad003b0ce7e2d0adf392e02de0026b0714802e8895aa6797aee3c&=&format=webp&quality=lossless&width=226&height=51"/>
            <img src="https://media.discordapp.net/attachments/878640088446271509/1206597590540488704/Vector_2.png?ex=65dc9693&is=65ca2193&hm=01d2b31771573cf4bcbb0663fb5a7dc07e49cf2a0ff02540f2613d30a134e7cd&=&format=webp&quality=lossless&width=226&height=51"/>
            </div>
        )
      }
    
    </div>
  );
};

export default Work;

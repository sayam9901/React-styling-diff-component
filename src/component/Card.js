import React from "react";

const Card = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        {/* this div is fro the 3 button in card section */}
        <button
          style={{
            width: "142px",
            height: "36px",
            borderRadius: "8px",
            padding: "12px",
            marginRight: "6px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 60px 0 rgba(0, 0, 0, 0.04)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/878640088446271509/1206520277215739914/trophy.png?ex=65dc4e92&is=65c9d992&hm=37e8276b46ab3d494687017f2a096da76179104485a7f0b4fcc96a196cea8510&=&format=webp&quality=lossless&width=15&height=15"
            style={{ width: "12px", height: "12px" }}
          />
          Popular Coupons
        </button>
        <button
          style={{
            width: "142px",
            height: "36px",
            borderRadius: "8px",
            padding: "12px",
            marginRight: "6px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 60px 0 rgba(0, 0, 0, 0.04)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/878640088446271509/1206520276901171240/Timer.png?ex=65dc4e92&is=65c9d992&hm=042545783cb875edea9aeef5a3f5609ff57b4f91ee294dd79d4f9e9ec39299d2&=&format=webp&quality=lossless&width=15&height=15"
            style={{ width: "12px", height: "12px" }}
          />
          Ending Soon
        </button>
        <button
          style={{
            width: "142px",
            height: "36px",
            borderRadius: "8px",
            padding: "12px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 60px 0 rgba(0, 0, 0, 0.04)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/878640088446271509/1206520276590796800/Vector_3.png?ex=65dc4e92&is=65c9d992&hm=00b6fdfd51ca418bb2d15e5926b406c97f96bdf302a3eafb6b10b54b34c52518&=&format=webp&quality=lossless&width=10&height=15"
            style={{ width: "12px", height: "12px" }}
          />
          Latest Coupons
        </button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* this div is for the cards */}
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
          <div
            style={{
              width: "calc(55% - 20px)",
              maxWidth: "200px",
              height: "238px",
              borderRadius: "10px",
              border: "1px solid rgba(236, 236, 236, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              marginBottom: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}
          >
            {/* card 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "60%",
                widht: "80%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "rgba(59, 166, 21, 1)",
                  marginLeft: "15%",
                }}
              >
                Upto 60% off on Appliance
              </div>
              <img
                src="https://media.discordapp.net/attachments/878640088446271509/1206530334125195274/image_12.png?ex=65dc57ef&is=65c9e2ef&hm=034552e12b5ce521f99543292ee7634ef26b53059f4822e9ff5365f394e4ef18&=&format=webp&quality=lossless&width=101&height=30"
                style={{}}
              />
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(135, 135, 135, 1)",
                  marginLeft: "10%",
                }}
              >
                Upto 60% off on the summer collection
              </div>
            </div>
            <button style={{padding:"4% 14%",backgroundColor:"rgba(240, 28, 33, 1)",color:"white",borderRadius:'8px',border:"rgba(240, 28, 33, 1)"}}>GRAB NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

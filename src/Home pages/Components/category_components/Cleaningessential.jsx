import React from "react";
import styled from "styled-components";
import "../category_components/Cleaningessential.css"

const Cleancard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
  
  const InsideCardclean = ({
    src = "",
    category = "",
  }) => {
    return (
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={src}
            style={{ width: "180px", height: "150px", marginTop: "5vh" }}
            alt="images"
          />
        </div>
        <TextP>
          <center>{category}</center>
        </TextP>
        <div>
          <center>
            <button type="button" class="btnclean">
              {" "}
              <i class="fa fa-shopping-cart"></i>Add to cart{" "}
            </button>
          </center>
        </div>
      </section>
    );
  };
  
  const Slideclean = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  
  const Displayclean = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    background-size: cover;
  `;
  const TextP = styled.p`
    font-family: "Forum", cursive;
    font-size: 19px;
    color: black;
    margin-left: 4%;
`;
  
const Cleaningessential = () => {
    return (
      <div className="veggies">
        <Displayclean>
          <h3 className="text1">Cleaning Essentials</h3>
          <Slideclean>
            <Cleancard>
              <InsideCardclean
                src={"https://m.media-amazon.com/images/I/91+Rw+hgKlS._SL1500_.jpg"}
                category={"Scrub Pad"}
              />
            </Cleancard>
            <Cleancard>
              <InsideCardclean
                src={"https://images-eu.ssl-images-amazon.com/images/I/51g9J2BK5rS._AC._SR360,460.jpg"}
                category={"Floor Mop"}
              />
            </Cleancard>
            <Cleancard>
              <InsideCardclean
                src={"https://5.imimg.com/data5/PF/II/TP/SELLER-61622388/red-harpic-500x500.jpg"}
                category={"Bathroom Cleaner"}
              />
            </Cleancard>
          </Slideclean>
        </Displayclean>
      </div>
    );
  };
  export default Cleaningessential;
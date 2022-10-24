import React from "react";
import styled from "styled-components";
import "../category_components/Instantfood.css";


const Instacard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsideCardinsta = ({
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
          <button type="button" class="btninsta">
            {" "}
            <i class="fa fa-shopping-cart"></i>Add to cart{" "}
          </button>
        </center>
      </div>
    </section>
  );
};

const Slideinsta = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Displayinsta = styled.div`
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

const Instantfood = () => {
  return (
    <div className="fruit">
      <Displayinsta>
        <h3 className="text1">Instant Food</h3>
        <Slideinsta>
          <Instacard>
            <InsideCardinsta
              src={"https://m.media-amazon.com/images/I/51llDKvs5ML.jpg"}
              category={"Chicken cup noodles"}
            />
          </Instacard>
          <Instacard>
            <InsideCardinsta
              src={"https://m.media-amazon.com/images/I/91sFWJgCLDL._SL1500_.jpg"}
              category={"Veg cup noodles"}
            />
          </Instacard>
          <Instacard>
            <InsideCardinsta
              src={"https://m.media-amazon.com/images/I/71CcmSuTAnL._SL1500_.jpg"}
              category={"Lays Magic Masala"}
            />
          </Instacard>
        </Slideinsta>
      </Displayinsta>
    </div>
  );
};
export default Instantfood;
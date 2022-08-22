import React from "react";
import styled from "styled-components";
import "../category_components/tomato.css";

const SliderButton = styled.div`
  width: 10vh;
  height: 10vh;
  border-radius: 5vh;
  background-color: white;
  margin-left: 10px;
`;

const InsideSliderLeftButton = () => {
  return <h1 style={{ fontSize: "40px", textAlign: "center" }}>{"<"}</h1>;
};

const InsideSliderRightButton = () => {
  return <h1 style={{ fontSize: "40px", textAlign: "center" }}>{">"}</h1>;
};

const Vegcard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsideCardveg = ({
  src = "https://imgur.com/ICRZASq.jpeg",
  category = "Orange",
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
          <button type="button" class="btnveg">
            {" "}
            <i class="fa fa-shopping-cart"></i>Add to cart{" "}
          </button>
        </center>
      </div>
    </section>
  );
};

const Slideveg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Displayveg = styled.div`
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

const Vegetables = () => {
  return (
    <div className="veggies">
      <Displayveg>
        <h3 className="text1">Vegetables</h3>
        <Slideveg>
          <Vegcard>
            <InsideCardveg
              src={"https://imgur.com/GEtx9iF.png"}
              category={"Capsicum"}
            />
          </Vegcard>
          <Vegcard>
            <InsideCardveg
              src={"https://imgur.com/S9pxNaL.png"}
              category={"Cabbage"}
            />
          </Vegcard>
          <Vegcard>
            <InsideCardveg
              src={"https://imgur.com/mCOCUky.png"}
              category={"Tomato"}
            />
          </Vegcard>
        </Slideveg>
      </Displayveg>
    </div>
  );
};
export default Vegetables;
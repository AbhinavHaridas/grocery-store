import React from "react";
import styled from "styled-components";
import "../category_components/orange.css";

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

const Fruitcard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsideCardfruit = ({
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
          <button type="button" class="btnfruit">
            {" "}
            <i class="fa fa-shopping-cart"></i>Add to cart{" "}
          </button>
        </center>
      </div>
    </section>
  );
};

const Slidefruit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Displayfruit = styled.div`
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

const Fruit = () => {
  return (
    <div className="fruit">
      <Displayfruit>
        <h3 className="text1">Fruit</h3>
        <Slidefruit>
          <Fruitcard>
            <InsideCardfruit
              src={"https://imgur.com/ICRZASq.jpeg"}
              category={"Orange"}
            />
          </Fruitcard>
          <Fruitcard>
            <InsideCardfruit
              src={"https://imgur.com/bjBo6mf.png"}
              category={"Strawberry"}
            />
          </Fruitcard>
          <Fruitcard>
            <InsideCardfruit
              src={"https://imgur.com/N7ny8aP.jpeg"}
              category={"Banana"}
            />
          </Fruitcard>
        </Slidefruit>
      </Displayfruit>
    </div>
  );
};
export default Fruit;
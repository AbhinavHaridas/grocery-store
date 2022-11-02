import React from "react";
import styled from "styled-components";
import "../category_components/Personalcare.css";

const Carecard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsideCardcare = ({
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
          <button type="button" class="btncare">
            {" "}
            <i class="fa fa-shopping-cart"></i>Add to cart{" "}
          </button>
        </center>
      </div>
    </section>
  );
};

const Slidecare = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Displaycare = styled.div`
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

const Personalcare = () => {
  return (
    <div className="fruit">
      <Displaycare>
        <h3 className="text1">Personal Care Products</h3>
        <Slidecare>
          <Carecard>
            <InsideCardcare
              src={"https://m.media-amazon.com/images/I/41YOIARZyaL._SL1000_.jpg"}
              category={"Shampoo"}
            />
          </Carecard>
          <Carecard>
            <InsideCardcare
              src={"https://m.media-amazon.com/images/I/619GOYL+whL._SL1500_.jpg"}
              category={"Face Cream"}
            />
          </Carecard>
          <Carecard>
            <InsideCardcare
              src={"https://media.istockphoto.com/photos/dove-nourishing-shower-cream-picture-id458600183?k=20&m=458600183&s=612x612&w=0&h=kkvBY2b2XE7Ge52S6h-iTVaiVkflFRzYoPaKFiz62gI="}
              category={"Moisturizer"}
            />
          </Carecard>
        </Slidecare>
      </Displaycare>
    </div>
  );
};
export default Personalcare;
import React from "react";
import styled from "styled-components";
import "../category_components/Dailyessential.css"

const Dailycard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
  
  const InsideCarddaily = ({
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
            <button type="button" class="btndaily">
              {" "}
              <i class="fa fa-shopping-cart"></i>Add to cart{" "}
            </button>
          </center>
        </div>
      </section>
    );
  };
  
  const Slidedaily = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  
  const Displaydaily = styled.div`
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
  
const Dailyessential = () => {
    return (
      <div className="veggies">
        <Displaydaily>
          <h3 className="text1">Daily Essentials</h3>
          <Slidedaily>
            <Dailycard>
              <InsideCarddaily
                src={"https://www.jiomart.com/images/product/600x600/490626261/wibs-large-bread-400-g-product-images-o490626261-p490626261-0-202204092013.jpg"}
                category={"Bread"}
              />
            </Dailycard>
            <Dailycard>
              <InsideCarddaily
                src={"https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg"}
                category={"Milk"}
              />
            </Dailycard>
            <Dailycard>
              <InsideCarddaily
                src={"https://assets.tendercuts.in/product/u/h/uhw.jpg"}
                category={"Eggs"}
              />
            </Dailycard>
          </Slidedaily>
        </Displaydaily>
      </div>
    );
  };
  export default Dailyessential;
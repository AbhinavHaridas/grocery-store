import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "../Home pages/Components/category_components/tomato.css";

const Vegcard = styled.div`
  width: 40vh;
  height: 370px;
  border-radius: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsideCardveg = ({ image,name }) => {
    return (
        <section>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src={image}
                    style={{ width: "180px", height: "150px", marginTop: "5vh" }}
                    alt="images"
                />
            </div>
            <TextP>
                <center>{name}</center>
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
  margin-bottom: 7vh;
`;

const Displayveg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.COLORS[props.id - 1])};
  background-size: cover;
`;
const TextP = styled.p`
  font-family: "Forum", cursive;
  font-size: 19px;
  color: black;
  margin-left: 4%;
`;

const Categories = ({ id, title, COLORS }) => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://localhost:8000/categories/fetch_few_category_items?type_id=${id}&limit=4`, requestOptions)
            .then(response => response.json())
            .then(json => setJsonData(json))
            .catch(error => console.log('error', error));
    }, [id]);

    return (
        <Displayveg COLORS={COLORS} id={id}>
            <h3 className="text1">{title}</h3>
            <Slideveg>
                    {
                        jsonData?.map((item) => {
                            return <Vegcard>
                                    <InsideCardveg image={item.image} name={item.name} />
                                </Vegcard>
                        })
                    }
            </Slideveg>
        </Displayveg>
    )
}

export default Categories;
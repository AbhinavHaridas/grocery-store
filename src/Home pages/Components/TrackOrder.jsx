import React, { useState, Component } from "react";
import SearchNavbar from "./SearchNavbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { Tick } from "./Tick.js";
import {Model} from "./Modalordersummary";

// Import Images here
import cancel from "../images/cancel.png";
import list_alt from "../images/list_alt.png";
import order_man from "../images/Order-Man.png";
import rating from "../images/rating.png";
import progress from "../images/progress bar.png";

const containerStyle = {
  width: "627px",
  height: "860px",
};

const center = {
  lat: 19.0453,
  lng: 72.889,
};

const TrackOrderWrap = styled.div`
  font-family: "Forum", cursive;
`;

const NavbarWrap = styled.div``;

const Content = styled.div`
  display: flex;
`;

const Heading = styled.p`
  text-align: center;
  font-size: 64px;
  font-weight: 400;
  margin: 1%;
  padding-bottom: 32px;
`;

const ContentWrap = styled.div`
  padding: 32px;
`;

const OrderDetailsWrap = styled.div`
  margin-left: 3%;
`;

const OrderDetails = styled.div`
  padding: 18px 22px;
  background-color: #efefef;
  width: 717px;
  margin-bottom: 3%;
`;

const DetailWrite = styled.p`
  font-weight: 400;
  font-size: 34px;
  line-height: 147.94%;
  color: #8e8c8c;
`;

const Button = styled.button`
  height: 70px;
  border-radius: 15px;
  border: none;
  font-size: 28px;
  font-family: "Forum", cursive;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    opacity: 0.9;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeliveryDetails = styled.div`
  background-color: #efefef;
  width: 717px;
  padding: 18px 22px;
`;

const DeliveryPersonDetail = styled.div`
  display: flex;
  align-items: center;
`;

const PersonImage = styled.div`
  width: 129px;
  height: 125px;
  padding: 10px 50px 10px 10px;
`;

const PersonDetail = styled.div``;

const Progress = styled.img`
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Callmodal= ({summaryClick,setSummaryClick})=> {
  if (summaryClick)
  {return(
    <Model open={summaryClick} setOpen={setSummaryClick}/>
  )}
} 

const TrackOrder = () => {
  const [summaryClick,setSummaryClick]=useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  return (
    <TrackOrderWrap>
      <NavbarWrap>
        <SearchNavbar
          setIsSelected={setIsSelected}
          isSelected={isSelected}
        ></SearchNavbar>
      </NavbarWrap>
      <ContentWrap onClick={() => setIsSelected(false)}>
        <Heading>Track Your Order</Heading>

        <Content>
          <Callmodal summaryClick={summaryClick} setSummaryClick={setSummaryClick}/>
          <LoadScript googleMapsApiKey={`${process.env.API_KEY}`}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <Marker
                icon={
                  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                }
                position={center}
              />
              <></>
            </GoogleMap>
          </LoadScript>

          <OrderDetailsWrap>
            <OrderDetails>
              <Div>
                <p style={{ fontSize: 44, margin: 0 }}>
                  Order ID: BS323WDS423{" "}
                </p>
                <Tick size={50} style={{ display: "inline-block" }} />
              </Div>
              <DetailWrite>13:47 pm | 12 June 2022</DetailWrite>
              <DetailWrite>Order Total : $ 450.00 </DetailWrite>
              <DetailWrite> Order Items : 5 </DetailWrite>
              <ButtonWrap>
                <Button
                  style={{ color: "white", backgroundColor: "red", width: 235 }}
                >
                  <span>Cancel Order</span>

                  <img src={cancel} alt="" style={{ size: 38 }} />
                </Button>
                <Button onClick={() => setSummaryClick(true)} style={{ backgroundColor: "#90F83F", width: 315 }}>
                  View Order Summary
                  <img src={list_alt} alt="" style={{ size: 38 }} />
                </Button>
              </ButtonWrap>
            </OrderDetails>

            <DeliveryDetails>
              <DetailWrite style={{ paddingBottom: 10, margin: 0 }}>
                Delivery Partner Details
              </DetailWrite>
              <DeliveryPersonDetail>
                <PersonImage>
                  <img src={order_man} alt="" />
                </PersonImage>
                <PersonDetail>
                  <p style={{ fontSize: 38, margin: 0 }}>Raghav Mishra</p>

                  <DetailWrite style={{ fontSize: 22, margin: 0 }}>
                    <span>
                      <img
                        src={rating}
                        alt=""
                        style={{ width: 120, height: 24 }}
                      />
                    </span>
                    | 4.2/5 | 300+ Orders Delivered
                  </DetailWrite>
                  <DetailWrite style={{ fontSize: 24, margin: 0 }}>
                    Contact - 9237334234
                  </DetailWrite>
                </PersonDetail>
              </DeliveryPersonDetail>
              <p style={{ fontSize: 38, textAlign: "center" }}>
                On Time | Arriving In 5 Mins
              </p>
              <Progress src={progress} alt="" />
            </DeliveryDetails>
          </OrderDetailsWrap>
        </Content>
      </ContentWrap>
    </TrackOrderWrap>
  );
};

export default TrackOrder;



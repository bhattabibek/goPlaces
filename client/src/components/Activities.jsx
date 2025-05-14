import React from "react";
import styled from "styled-components";
import styles from "./Activities.module.css";

const Activities = () => {
  const StyledButton = styled.button`
    background-color: #ff8503;
    padding: 10px;

    color: white;
    margin-top: 15px;
  `;
  const CardPadding = styled.div`
    padding: 30px;
  `;
  const CardShadow = styled.div`
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 25px;
  `;
  return (
    <>
      <h1 className={styles.headingTitle}>Activities</h1>
      <CardPadding className="md:flex md:gap-2.5">
        <CardShadow>
          <img src="/trek.jpg" />
          <h3>Trekking</h3>
          <p>Explore Different Places to Trek</p>
          <StyledButton>Know More</StyledButton>
        </CardShadow>
        <CardShadow>
          <img src="/rafting.jpg" />
          <h3>Rafting</h3>
          <p>Explore Different Places to Raft</p>
          <StyledButton>Know More</StyledButton>
        </CardShadow>
        <CardShadow>
          <img src="/para.jpg" />
          <h3>Paragliding</h3>
          <p>Explore Different Places to ParaGlide</p>
          <StyledButton>Know More</StyledButton>
        </CardShadow>
        <CardShadow>
          <img src="/hiking.jpg" />
          <h3>Hiking</h3>
          <p>Explore Different Places to Hike</p>
          <StyledButton>Know More</StyledButton>
        </CardShadow>
      </CardPadding>
    </>
  );
};

export default Activities;

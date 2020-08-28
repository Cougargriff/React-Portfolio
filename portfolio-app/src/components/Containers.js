import React from "react";
import styled from "styled-components";
import cover from "../res/cover.jpg";

export const TwoColumnContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 850px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;
export const TopSection = styled.section`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgb(255, 255, 255) 100%
    ),
    url(${cover});
  background-size: cover;
  background-position-y: 20%;

  @media (max-width: 1105px) {
    grid-template-columns: 1fr;
  }
`;
export const FourColumnContent = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
export const ThreeColumnContent = styled.div`
  display: flex;
  padding: 20px;
`;
export const NColumnContent = styled.div`
  display: flex-box;
  padding: ${(props) => props.padding ? props.padding : "20px"};
  ${(props) => props.padding ? `padding-left: ${props.paddingLeft};` : ""}
  ${(props) => props.padding ? `padding-bottom: ${props.paddingBottom};` : ""}

  @media (max-width: ${(props) => (props.size ? props.size : "850px")}) {
    padding-top: 15px;
    display: flex-box;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

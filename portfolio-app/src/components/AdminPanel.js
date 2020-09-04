import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "./TextBox";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { adminSignIn, adminSignOut } from "../store/actions/EditorActions";
import { NColumnContent, TwoColumnContent } from "./Containers";


const Card = styled.div`
  width: ${props => (props.size * 90).toString() + "px"};
  height: ${props => (props.size * 50).toString() + "px"};
  align-items: center;
`

const CardItem = styled.div`
  border-radius: 8px;
  -webkit-box-shadow: -7px 7px 48px -9px rgba(0,0,0,0.61);
  -moz-box-shadow: -7px 7px 48px -9px rgba(0,0,0,0.61);
  box-shadow: -7px 7px 48px -9px rgba(0,0,0,0.61);
  width: 80%;
  height: 80%;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

const AdminPanel = (props) => {

  const temp_sizes = [16]

  return (
    <Wrapper>
      {temp_sizes.map(size => {
        return (
          <Card size={size} >
            <CardItem>
              <Title size={(size * 8).toString() + "px"}>
              hello world
              </Title>
            </CardItem>
          </Card>
        )
      })}
    </Wrapper>
    
  )
}

export default AdminPanel;
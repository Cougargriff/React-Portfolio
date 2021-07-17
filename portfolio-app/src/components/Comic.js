import React, { useEffect } from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import Posts from "./Posts";
import { NColumnContent } from "./Containers";
import { useSelector, useDispatch } from "react-redux";
import {
    getThemes
} from "../store/actions/ThemeActions";

const ComicContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;
const TopBar = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const ComicHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    zoom: 120%
    img {
        -webkit-box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
    }
    
`;

const ComicWelcome = "Welcome to my blog !";

const RandomXKCD = () => {
    return (
        <ComicHolder>
            <img src="https://xkcd-latest.herokuapp.com/xkcd-random"/>
        </ComicHolder>
    );
};

function ComicButtons(props) {
  const theme = useSelector((state) => state.ThemeReducer.theme);
  return (
    <TopBar>
      <NColumnContent>
        <ColorButton href="/" color={theme.color1} text="Portfolio" />
      </NColumnContent>
    </TopBar>
  );
}

function Comic() {
  const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getThemes());
    // }, [])

  return (
    <ComicContainer>
      <ComicButtons/>
      {RandomXKCD()}
    </ComicContainer>
  );
}

export default Comic;

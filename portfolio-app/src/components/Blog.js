import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import Posts from "./Posts";
import { Title } from "./TextBox";
import { NColumnContent } from "./Containers";
import { useDispatch } from "react-redux";
import { fetchPost } from "../store/actions/PostActions";
import Post from "./Post";

const BlogContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;
const TopBar = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const BlogWelcome = "Welcome to my blog !";

function BlogButtons(props) {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);

  return (
    <TopBar>
      <NColumnContent>
        <ColorButton href="/" color="#F18E33" text="Portfolio" />
        {isAdmin ? (
          <ColorButton color="#779ECB" text="Editor" href="/admin-editor" />
        ) : undefined}
        {props.back ? (
          <ColorButton color="#b19cd9" text="Blog" href="/blog" />
        ) : undefined}
      </NColumnContent>
    </TopBar>
  );
}

function Blog({ match }) {
  const id = match.params.id;

  return (
    <BlogContainer>
      <BlogButtons back={id !== undefined} />
      {!id ? (
        <Title className="headers" changeFontAt="700px" changeFontTo="40px">
          {BlogWelcome}
        </Title>
      ) : undefined}
      {id ? <Post id={id} /> : <Posts />}
    </BlogContainer>
  );
}

export default Blog;

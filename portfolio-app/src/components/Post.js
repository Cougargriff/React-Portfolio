import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPost, deletePost } from "../store/actions/PostActions";
import { Title } from "./TextBox";
import MarkdownIt from "markdown-it";
import { NColumnContent } from "./Containers";
import ColorButton from "./ColorButton";

/* Must import for github md styling */
import GithubStyle from "github-markdown-css";

const PostWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 45px;

  border: 1px solid #e1e4e8;
  border-radius: 6px;

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

const CreatedAt = styled.div`
  padding: 0px;
  padding-bottom: 10px;
  margin: 0px;
  opacity: 0.3;
`;

const PostContainer = styled.div`
  border-radius: 25px;
  padding: 16px;
  width: 980px;

  @media (max-width: 1000px) {
    width: 680px;
  }

  @media (max-width: 700px) {
    width: 350px;
  }
`;

const formatDate = (time_stamp) => {
   const date = new Date(time_stamp);
   return 'FIX THIS';
};

const PostButtons = (post, dispatch) => {
  return (
    <NColumnContent padding="0px" paddingBottom="15px" size="1000px">
      <ColorButton
        margins="0px"
        color="#FF0000"
        text="Delete"
        onClick={() => {
          if (
            window.confirm(`Do you really want to delete ${post.title} ?`) ===
            true
          ) {
            dispatch(deletePost(post.id));
          }
        }}
      />
      <ColorButton
        color="#779ECB"
        text="Edit"
        href={`/admin-editor/${post.id}`}
      />
    </NColumnContent>
  );
};

const Post = (props) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);
  const post = useSelector((state) => state.PostsReducer.selectedPost);
  const fetchedPost = useSelector((state) => state.PostsReducer.fetchedPost);
  const fetchPostError = useSelector(
    (state) => state.PostsReducer.fetchPostError
  );

  useEffect(() => {
    // Run! Like go get some data from an API.
    dispatch(fetchPost(props.id));
  }, []);

  const md = new MarkdownIt({ html: true });

  return !fetchedPost || fetchPostError ? (
    <PostContainer />
  ) : (
    <PostWrapper>
      <PostContainer>
        <PostContent>
          {isAdmin ? PostButtons(post, dispatch) : undefined}
          <Title
            size="50px"
            margins="margin: 0px;"
            changeFontAt="700px"
            changeFontTo="30px"
          >
            {post.title}
          </Title>
          <CreatedAt> Created on: {formatDate(post.time_stamp)} </CreatedAt>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: md.render(post.content) || '' }}
          />
        </PostContent>
      </PostContainer>
    </PostWrapper>
  );
};

export default Post;

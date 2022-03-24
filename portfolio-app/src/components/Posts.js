import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPosts, deletePost, clearSelectedPost } from "../store/actions/PostActions";
import { Title } from "./TextBox";
import MarkdownIt from "markdown-it";
import { NColumnContent } from "./Containers";
import ColorButton from "./ColorButton";
import {
  Link
} from "react-router-dom";

/* Must import for github md styling */
import GithubStyle from "github-markdown-css"; 

const StyledTitle = styled(Title)`
  color: black; 
  transition-duration: 0.4s;
  &:hover {
    background: transparent;
    cursor: pointer;
    color: #6A6C6E;
  }
`

const PostsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
`;

const Post = styled.div`
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
  return time_stamp.toString();
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

const Posts = (props) => {
  const dispatch = useDispatch();
  const postsError = useSelector((state) => state.PostsReducer.fetchPostsError);
  const postsFetched = useSelector((state) => state.PostsReducer.fetchedPosts);
  const posts = useSelector((state) => state.PostsReducer.posts);
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);

  useEffect(() => {
    // Run! Like go get some data from an API.
    dispatch(fetchPosts());
    dispatch(clearSelectedPost())
  }, []);

  const md = new MarkdownIt({ html: true });

  return !postsFetched || postsError ? (
    <PostsContainer></PostsContainer>
  ) : (
    <PostsContainer>
      {posts.map((post, i) => {
        return (
          <PostContainer key={i}>
            <Post>
              {isAdmin ? PostButtons(post, dispatch) : undefined}
              <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                <StyledTitle size="50px" margins="margin: 0px;" changeFontAt="700px" changeFontTo="30px">
                  {post.title}
                </StyledTitle>
              </ Link>
              <CreatedAt>Created on: {formatDate(post.time)}</CreatedAt>

              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
              />
            </Post>
          </PostContainer>
        );
      })}
    </PostsContainer>
  );
};

export default Posts;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { fetchPosts } from '../store/actions/PostActions';
import { Title } from './TextBox';
import ReactMarkdown from 'react-markdown'

const PostsContainer = styled.div`
  width: 100%;
  height: 2000px;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const Post = styled.div`
  color: black;
  border-radius: 25px;
  padding: 50px;
  border: 5px solid red;
`

const PostContainer = styled.div`
  border-radius: 25px;
  padding: 50px;
`

function Posts (props) {
  const arr = [1, 3, 5, 2, 7, 9, 2, 2, 1]
  const dispatch = useDispatch();
  const postsError = useSelector(state => state.PostsReducer.fetchPostsError)
  const postsFetched = useSelector(state => state.PostsReducer.fetchedPosts)
  const posts = useSelector(state => state.PostsReducer.posts)

  useEffect(() => {
    // Run! Like go get some data from an API.
    dispatch(fetchPosts())
  }, []);

    return !postsFetched ? (
      <PostsContainer>
      </PostsContainer>
    ) : (
      <PostsContainer>
        {posts.map((post, i) => {
          return (
            <PostContainer key={i} >
              <Post >
                <Title>
                  {post.title}
                </Title>
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
                
              </Post>
            </PostContainer>)
        })}
      </PostsContainer>
    )
  
  
}

export default Posts
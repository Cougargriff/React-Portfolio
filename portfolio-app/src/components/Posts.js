import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { fetchPosts, deletePost } from '../store/actions/PostActions';
import { Title } from './TextBox';
import ReactMarkdown from 'react-markdown'
import { NColumnContent } from './Containers';
import ColorButton from "./ColorButton";

const PostsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
`
const Post = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  border-radius: 3px;
  padding: 50px;
  border: 2px solid black;
`

const CreatedAt = styled.div`
  padding: 0px;
  margin: 0px;
  opacity:0.3;
`

const PostContainer = styled.div`
  border-radius: 25px;
  padding: 16px;
`

const formatDate = (time_stamp) => {
  const date = new Date(time_stamp);
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date)

  return `${day}-${month}-${year }`
}

const Posts = (props) => {
  const arr = [1, 3, 5, 2, 7, 9, 2, 2, 1]
  const dispatch = useDispatch();
  const postsError = useSelector(state => state.PostsReducer.fetchPostsError)
  const postsFetched = useSelector(state => state.PostsReducer.fetchedPosts)
  const posts = useSelector(state => state.PostsReducer.posts)
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);


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
                {isAdmin ? 
                <ColorButton  
                margins="0px"
                color='#FF0000'
                text='Delete'
                onClick={() => {
                  if (window.confirm(`Do you really want to delete ${post.title} ?`) == true) { 
                  dispatch(deletePost(post.id))
                  }
                }}
                />: undefined}
                <Title size="50px" margins="margin: 0px;">
                  {post.title}
                </Title>
                <CreatedAt>
                Created on: {formatDate(post.time_stamp)}
                </CreatedAt>
               
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
                
              </Post>
            </PostContainer>)
        })}
      </PostsContainer>
    )
  
  
}

export default Posts
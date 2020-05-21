/*
    src/components/Home.js
*/

import React from 'react';
import { Box, Flex } from 'rebass';
import { Divider } from 'antd';

const styles = {
    center: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }

function contents() {
    return (
        <center >
            <h2 className="contents" >
                I am a Software Engineer
            </h2>
            </center>      
    )
}

function title() {
    return (
        <center>      
        <Box className="cover_image"
        text-align='center'
        sx={{
            px: 2,
            py: 6,
            backgroundImage: 'url(https://i.imgur.com/YabLT7b.jpg)',
            backgroundSize: 'cover',
            borderRadius: 8,
            maxWidth: '800px',
            color: 'white',
            bg: 'gray',
        }}>
  <h1 className="headers">
    Griffin Johnson
  </h1>
</Box>
</center>
    )
}



function Home(props) {
    return (
        <div style={styles.center}>
            {title()}
            <br/>
            {contents()}
        </div>
    )
}

export default Home;
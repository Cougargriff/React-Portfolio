import React from 'react'; // Import the Component component from React
import styled from 'styled-components';

const PaddedDiv = styled.div`
  padding: 4px;
  margin: 0;
`

function Thumbnail(props) {
  return (
    <PaddedDiv>
        <div>
            <a href={props.link}>
                <img src={props.image} alt="Project Image" width="50" />
            </a>
        </div>
    </PaddedDiv>
  );
}
 
export default Thumbnail;
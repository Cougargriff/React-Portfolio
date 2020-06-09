import React from "react";
import styled from 'styled-components';

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function ColorButton(props) {
    return (
        <Button href={props.href} color={props.color}>
                {props.text}
        </Button>
    )
}

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  width: 70px;
  margin: 0.5rem 1rem;
  background: transparent;
  background-color: #A3D9FF;
  color: white;
  border: 2px solid ${props => shadeHexColor(props.color, 0.3)};
  text-decoration: none;
  background-color: ${props => shadeHexColor(props.color, 0.3)};
  transition-duration: 0.4s;


  &:hover {
    background: transparent;
    color: ${props => props.color}; 
  }
`

export default ColorButton;
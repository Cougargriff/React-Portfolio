/*
  Stats to graph
*/
import React from "react";
import { useSelector } from 'react-redux'
import ColorButton from "./ColorButton";
import {
  TwoColumnContent,
  ThreeColumnContent,
  FourColumnContent,
  TopSection
} from "./Containers"
import styled from "styled-components";

const StatsSection = styled.div`
  text-align: center;
`;

function StatsTitle() {
  return <h1 className="headers">Stats</h1>;
}

function Stats() {
  return (
	<StatsSection>
		{StatsTitle()}	
	</StatsSection>
  );
}

export default Stats;

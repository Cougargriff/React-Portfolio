import React from "react";
import { useInView } from "react-intersection-observer";
import "./IntersectionExampleOne.css";

import Projects from "./Projects.js";
import About from "./About.js";
import Home from "./Home.js";
import Resume from "./Resume.js";


const ExampleOne = () => {
  //threshold is a setting, .3 means randomInView becomes true when 30% of element comes into view
  //The Refs are attached to the section you want to observe
  //The inView values are booleans, true if 30% inview, false if not
  const [firstRef, firstInView] = useInView({ threshold: 0.3 });
  const [secondRef, secondInView] = useInView({ threshold: 0.3 });
  const [thirdRef, thirdInView] = useInView({ threshold: 0.3 });
  const [fourthRef, fourthInView] = useInView({ threshold: 0.3 });

  return (
    <div>
      <Home/>
      <div ref={firstRef} className="divOne">
        {`Section First InView: ${firstInView}`}
        <br />
        {`Second Inview: ${secondInView}`}
        <br />
        {`Third Inview: ${thirdInView}`}
        <br />
        {`Fourth InView: ${fourthInView}`}
      </div>
      <div ref={secondRef} className="divTwo">
        <Projects/>
        {`Section First InView: ${firstInView}`}
        <br />
        {`Second Inview: ${secondInView}`}
        <br />
        {`Third Inview: ${thirdInView}`}
        <br />
        {`Fourth InView: ${fourthInView}`}
      </div>
      <div ref={thirdRef} className="divThree">
        <About/>
        {`Section First InView: ${firstInView}`}
        <br />
        {`Second Inview: ${secondInView}`}
        <br />
        {`Third Inview: ${thirdInView}`}
        <br />
        {`Fourth InView: ${fourthInView}`}
      </div>
      <div ref={fourthRef} className="divFour">
        <Resume/>
        {`Section First InView: ${firstInView}`}
        <br />
        {`Second Inview: ${secondInView}`}
        <br />
        {`Third Inview: ${thirdInView}`}
        <br />
        {`Fourth InView: ${fourthInView}`}
      </div>
    </div>
  );
};

export default ExampleOne;

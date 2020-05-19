import React from "react";
import { useInView } from "react-intersection-observer";
import Home from "./Home";
import { motion } from "framer-motion";
import "./IntersectionExampleTwo.css";
import Projects from "./Projects.js";
import About from "./About.js";
import Resume from "./Resume.js";

const ExampleOne = () => {
  //triggerOnce is another option, to trigger only once, default is false
  const [firstRef, firstInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [secondRef, secondInView] = useInView({ threshold: 0.3 });
  const [thirdRef, thirdInView] = useInView({ threshold: 0.3 });
  const [fourthRef, fourthInView] = useInView({ threshold: 0.3 });

  //varaints are used by framer motion
  const variantOne = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  const variantTwo = {
    small: { scale: 0.5 },
    big: { scale: 1 },
  };

  const variantThree = {
    start: { y: 0, opacity: 1 },
    end: { y: 200, opacity: 0.3 },
  };

  const variantFour = {
    start: { x: -400, opacity: 0.5, scale: 0.5 },
    end: { x: 0, opacity: 1, scale: 1 },
  };

  //framer motion elements have initial, animate, and varaints properties
  //initial is the initial state
  //animate changes the state of the element
  return (
    <div>
      <div ref={firstRef} className="divOne">
      <motion.div
          intial="end"
          animate={firstInView ? "start" : "end"}
          //optional, transition lets you decide how animations transition
          //in this example, it takes a total of 4 seconds to complete animation
          transition={{ duration: 2 }}
          variants={variantThree}
        >
          <center>
            <Home/>
          </center>
        </motion.div>
      </div>

      <div ref={secondRef} className="divTwo">
      <motion.div
          intial="end"
          animate={secondInView ? "start" : "end"}
          //optional, transition lets you decide how animations transition
          //in this example, it takes a total of 4 seconds to complete animation
          transition={{ duration: 2 }}
          variants={variantThree}
        >
          <center>
            <Projects/>
          </center>
        </motion.div>
      </div>
      <div ref={thirdRef} className="divThree">
        <motion.div
          intial="end"
          animate={thirdInView ? "start" : "end"}
          //optional, transition lets you decide how animations transition
          //in this example, it takes a total of 4 seconds to complete animation
          transition={{ duration: 2 }}
          variants={variantThree}
        >
          <center>
            <About/>
          </center>
        </motion.div>
      </div>
      <div ref={fourthRef} className="divFour">
      <motion.div
          intial="end"
          animate={fourthInView ? "start" : "end"}
          //optional, transition lets you decide how animations transition
          //in this example, it takes a total of 4 seconds to complete animation
          transition={{ duration: 2 }}
          variants={variantThree}
        >
          <Resume/>
          </motion.div>
      </div>
    </div>
  );
};

export default ExampleOne;

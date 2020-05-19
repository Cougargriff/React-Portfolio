import React from "react";
import { useInView } from "react-intersection-observer";
import Home from "./Home";
import { motion } from "framer-motion";
import "./IntersectionExampleTwo.css";

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
    start: { y: 0 },
    end: { y: 400 },
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
        <motion.h1
          initial="hide"
          //If firstInView is true, then change state to show, else state is hide
          animate={firstInView ? "show" : "hide"}
          variants={variantOne}
        >
          This is the first section
        </motion.h1>
      </div>

      <div ref={secondRef} className="divTwo">
        <motion.h1
          initial="small"
          animate={secondInView ? "big" : "small"}
          variants={variantTwo}
        >
          This is the second section
        </motion.h1>
      </div>
      <div ref={thirdRef} className="divThree">
        <motion.h1
          intial="end"
          animate={thirdInView ? "start" : "end"}
          //optional, transition lets you decide how animations transition
          //in this example, it takes a total of 4 seconds to complete animation
          transition={{ duration: 4 }}
          variants={variantThree}
        >
          This is the Third section
        </motion.h1>
      </div>
      <div ref={fourthRef} className="divFour">
        <motion.div
          initial="start"
          animate={fourthInView ? "end" : "start"}
          transition={{ duration: 2 }}
          variants={variantFour}
        >
          <h1>This is the Fourth section</h1>
          <p>This is the Fourth Paragraph</p>
          <h1>This is another Header</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ExampleOne;

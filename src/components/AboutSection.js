import React from "react";
import home1 from "../img/home1.png";
// // Styles
// import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../Styles";
import { fade, titleAni, photoAni } from "../animation";

//Wave
import Wave from "./Wave";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };
  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: { duration: 2, ease: "easeOut", staggerChildren: 1 },
  //   },
  // };
  return (
    <About>
      <Description>
        <motion.div
        // variants={container}
        // initial="hidden"
        // animate="show"
        // className="title"
        >
          <Hide>
            <motion.h2
              variants={titleAni}
              // variants={titleAnim} initial="hidden" animate="show"
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAni}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAni}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any questions about our service. We look forward to
          hearing from you!
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAni} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

// const About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// const Image = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `;
export default AboutSection;

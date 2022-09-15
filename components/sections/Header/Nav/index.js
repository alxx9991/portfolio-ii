import Row from "../../../layout/Row";
import { Link, animateScroll as scroll } from "react-scroll";
import GitLogo from "../../../../assets/git-logo.svg";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Nav = () => {
  const linkInitial = { opacity: 0, y: -15 };
  const linkFinal = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  };

  const linkHover = {
    scale: 1.065,
    transition: {
      duration: 0.1,
    },
  };

  const linkContent = [
    "Home",
    "About",
    "Work",
    "Contact",
    <GitLogo key={uuidv4()}></GitLogo>,
  ];

  const linkRefs = [
    "#home",
    "#about",
    "#work",
    "#contact",
    "https://github.com/alxx9991",
  ];

  const delayStart = 0.6;
  const delayIncrement = 0.125;

  const delays = linkContent.map((content, index) => {
    return delayStart + index * delayIncrement;
  });

  const links = linkContent.map((content, index) => {
    return (
      <motion.a
        key={uuidv4()}
        initial={linkInitial}
        animate={{
          ...linkFinal,
          transition: {
            delay: delays[index],
            duration: 0.4,
          },
        }}
        whileHover={linkHover}
        className="hover:text-highlight2 text-btn cursor-pointer duration-75"
        href={linkRefs[index]}
      >
        {content}
      </motion.a>
    );
  });

  return (
    <Row ss={1} es={1} sm={4} em={10} sl={8} el={13} sml={5} eml={9}>
      <div>
        <nav className="hidden md:flex justify-between items-center py-8 text-btn ">
          {links}
        </nav>
      </div>
    </Row>
  );
};

export default React.memo(Nav);

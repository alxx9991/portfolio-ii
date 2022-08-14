import Row from "../../layout/Row";
import StackItem from "./StackItem";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

//SVG imports
import TypescriptIcon from "../../../assets/typescript-icon.svg";
import JavascriptIcon from "../../../assets/javascript-icon.svg";
import TailwindIcon from "../../../assets/tailwind-icon.svg";
import ReactIcon from "../../../assets/react-icon.svg";
import NextIcon from "../../../assets/nextjs-icon.svg";
import PrismicIcon from "../../../assets/prismic-icon.svg";

const stackObjects = [
  { icon: <TypescriptIcon />, description: "Typescript" },
  { icon: <JavascriptIcon />, description: "Javascript" },
  { icon: <TailwindIcon />, description: "TailwindCSS" },
  { icon: <ReactIcon />, description: "React" },
  { icon: <NextIcon />, description: "NextJS" },
  { icon: <PrismicIcon />, description: "Prismic" },
];

const Stack = () => {
  const delays = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2];
  const stackItemElements = stackObjects.map((stackObject, index) => {
    return (
      <StackItem
        description={stackObject.description}
        animationDelay={delays[index]}
        key={uuidv4()}
      >
        {stackObject.icon}
      </StackItem>
    );
  });

  return (
    <div className="full-width-section mt-24">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-highlight2 my-6 md:my-8 text-center md:text-left"
        >
          My Current Stack
        </motion.h3>
      </Row>
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="content-gradient"
        >
          <div className="grid gap-16 my-8 grid-cols-2 max-w-[25rem] mx-auto lg:grid-cols-3 lg:max-w-[40rem]">
            {stackItemElements}
          </div>
        </motion.div>
      </Row>
    </div>
  );
};

export default Stack;

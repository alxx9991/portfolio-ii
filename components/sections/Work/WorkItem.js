import Row from "../../layout/Row";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import LinkIcon from "../../../assets/link-icon.svg";
import GitIcon from "../../../assets/git-logo-small.svg";

const WorkItem = ({ image, name, description, technologies, github, link }) => {
  const delays = [0.2, 0.4, 0.6, 0.8];

  const linkInitial = { opacity: 0, y: -15 };
  const linkFinal = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  };

  const linkHover = {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
  };

  const imageCursor = link ? "cursor-pointer" : "cursor-default";

  return (
    <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 content-gradient pt-20 relative"
      >
        {/* {link ? null : (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white px-2 py-1 font-medium  rounded-xl bg-highlight2 w-max -mt-10"
          >
            Coming soon ...
          </motion.p>
        )} */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className={`w-full flex flex-row items-center justify-center mb-4 ${imageCursor} relative`}
          href={link ? link : ""}
          onClick={(e) => {
            if (!link) {
              e.preventDefault();
            }
          }}
        >
          {image}
          <motion.div
            className="absolute w-full max-w-[864px] h-full bg-highlight1 opacity-0 rounded-lg"
            initial={{ opacity: 0 }}
            whileHover={
              link
                ? {
                    opacity: 0.6,
                    transition: {
                      duration: 0.1,
                    },
                  }
                : null
            }
          ></motion.div>
        </motion.a>
        <div className="flex flex-col gap-2 md:gap-4 mb-24 md:mb-36">
          <Row className="flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="subtitle"
            >
              {name}
            </motion.p>
            <div className="flex flex-row gap-8">
              {github && (
                <motion.a
                  initial={linkInitial}
                  whileInView={linkFinal}
                  whileHover={linkHover}
                  className="cursor-pointer"
                  href={github}
                  viewport={{ once: true }}
                >
                  <GitIcon></GitIcon>
                </motion.a>
              )}
              {link && (
                <motion.a
                  initial={linkInitial}
                  whileInView={linkFinal}
                  whileHover={linkHover}
                  className="cursor-pointer"
                  href={link}
                  viewport={{ once: true }}
                >
                  <LinkIcon></LinkIcon>
                </motion.a>
              )}
            </div>
          </Row>
          <div className="flex flex-col sgap-2">
            <div className="flex gap-4 md:gap-8  text-highlight1">
              {technologies.map((technology, index) => (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays[index] }}
                  viewport={{ once: true }}
                  className="caption"
                  key={uuidv4()}
                >
                  {technology}
                </motion.p>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=""
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Row>
  );
};

export default WorkItem;

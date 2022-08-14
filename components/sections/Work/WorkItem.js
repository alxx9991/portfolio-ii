import Row from "../../layout/Row";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const WorkItem = ({ image, name, description, technologies }) => {
  const delays = [0.2, 0.4, 0.6, 0.8];

  return (
    <Row
      ss={1}
      es={7}
      sm={2}
      em={10}
      sl={3}
      el={13}
      sml={3}
      eml={9}
      className="flex flex-col gap-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        whileHover={{
          scale: 1.015,
          transition: {
            duration: 0.2,
          },
        }}
        viewport={{ once: true }}
        className="w-full flex flex-row items-center"
      >
        {image}
      </motion.div>
      <div className="flex flex-col gap-4 mb-24 md:mb-36">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="subtitle"
        >
          {name}
        </motion.p>
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
    </Row>
  );
};

export default WorkItem;

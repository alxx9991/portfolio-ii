import Row from "../../layout/Row";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="full-width-section min-h-0 text-center mt-4 md:text-left md:mt-0"
    >
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={10} sml={3} eml={9}>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-highlight2"
        >
          Let{"'"}s Connect
        </motion.h3>
      </Row>
    </div>
  );
};

export default Contact;

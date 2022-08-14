import Row from "../../layout/Row";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="full-width-section">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="y-6 md:my-8 text-highlight2 text-center md:text-left"
        >
          About
        </motion.h3>
      </Row>
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="content-gradient flex flex-col gap-8 md:gap-12"
        >
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="subtitle">My Niche</p>
            <p>
              I’m a frontend software-developer specialising in digital
              experiences with a knack for finding optimal and efficient
              solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="subtitle">Currently</p>
            <p>
              A computer science and mathematics student helping business owners
              build their dream landing pages or mentoring students in
              mathematics and their careers.
            </p>
          </div>
        </motion.div>
      </Row>
    </div>
  );
};

export default About;

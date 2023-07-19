import Row from "../../layout/Row";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="full-width-section">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-6 md:my-8 text-center md:text-left"
        >
          <span className="heading-gradient">About</span>
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
              I’m a recently graduated software-developer with a keen interest in
              building user-facing web platforms. Most of my experience has been on the frontend / product side so far but I{"'"}m slowly leaning into backend development too!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="subtitle">Currently</p>
            <p>
              A freelance web developer helping small and medium businesses grow their online presence and reach more customers with beautiful conversion-focused websites. Check out our work at <a href="https://toastr.com.au" rel="noreferrer" target="_blank" className="underline text-highlight2">Toastr</a>{" "}!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="subtitle">Outside of work</p>
            <p>You can find me at the gym or working on my car :{")"}</p>
          </div>
        </motion.div>
      </Row>
    </div>
  );
};

export default About;

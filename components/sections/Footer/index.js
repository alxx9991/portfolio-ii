import Row from "../../layout/Row";
import GitLogo from "../../../assets/git-logo-small.svg";
import EmailIcon from "../../../assets/email-icon.svg";
import LinkedInIcon from "../../../assets/linkedin-icon.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="full-width-section min-h-0 mt-8">
      <Row ss={1} es={7} sm={2} em={5} sl={3} el={8} sml={3} eml={5}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start gap-8"
        >
          <GitLogo></GitLogo>
          <EmailIcon></EmailIcon>
          <LinkedInIcon></LinkedInIcon>
        </motion.div>
      </Row>
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <p className="text-b2 mt-16 mb-[-8%] text-center md:text-left">
          © 2022 Made by Alex and Anna {"<3"}
        </p>
      </Row>
    </div>
  );
};

export default Footer;

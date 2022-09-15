import Row from "../../layout/Row";
import GitLogo from "../../../assets/git-logo-small.svg";
import EmailIcon from "../../../assets/email-icon.svg";
import LinkedInIcon from "../../../assets/linkedin-icon.svg";
import { motion } from "framer-motion";

const Footer = () => {
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
          <motion.a
            initial={linkInitial}
            whileInView={linkFinal}
            whileHover={linkHover}
            className="cursor-pointer"
            href="https://github.com/alxx9991"
            viewport={{ once: true }}
          >
            <GitLogo></GitLogo>
          </motion.a>
          <motion.a
            initial={linkInitial}
            whileInView={linkFinal}
            whileHover={linkHover}
            className="cursor-pointer"
            href="mailto:alex.lin9991@gmail.com"
            viewport={{ once: true }}
          >
            <EmailIcon></EmailIcon>
          </motion.a>
          <motion.a
            initial={linkInitial}
            whileInView={linkFinal}
            whileHover={linkHover}
            className="cursor-pointer"
            href="https://www.linkedin.com/in/alex-lin-21aa2519b/"
            viewport={{ once: true }}
          >
            <LinkedInIcon></LinkedInIcon>
          </motion.a>
        </motion.div>
      </Row>
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <p className="text-b2 mt-16 mb-[-8%] text-center md:text-left">
          © 2022 Built by Alex
        </p>
      </Row>
    </div>
  );
};

export default Footer;

import Row from "../../layout/Row";
import WorkItem from "./WorkItem";
import Image from "next/image";
import GuildImage from "../../../assets/guild.png";
import ShareSplitImage from "../../../assets/sharesplit.png";
import AnnaPortfolioImage from "../../../assets/annasPortfolio.png";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div id="work" className="full-width-section mt-24">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-highlight2 my-6 md:my-8 text-center md:text-left"
        >
          Select Projects
        </motion.h3>
      </Row>
      <WorkItem
        image={
          <Image
            src={AnnaPortfolioImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["React", "NextJS", "TailwindCSS", "Prismic"]}
        name={"Anna's Portfolio"}
        description={"My cute bb's design portfolio :D"}
      ></WorkItem>
      <WorkItem
        image={
          <Image
            src={ShareSplitImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["React", "Typescript", "Redux", "Firebase"]}
        name={"ShareSplit"}
        description={
          "Free, accessible online web app allowing people to split bills, and calculate amounts oweing to each other. "
        }
        link="https://share-split.netlify.app/"
        github="https://github.com/alxx9991/split-share"
      ></WorkItem>
      <WorkItem
        image={
          <Image
            src={GuildImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["React", "GatsbyJS", "Prismic"]}
        name={"The Guild of Entrepreneurs"}
        description={
          "Website landing page for building a community of entrepreneurs and freelancers.  "
        }
        github="https://github.com/Guild-of-Entrepreneurs/site"
        link="https://www.guildofentrepreneurs.com/"
      ></WorkItem>
    </div>
  );
};

export default Work;

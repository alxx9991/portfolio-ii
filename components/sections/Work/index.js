import Row from "../../layout/Row";
import WorkItem from "./WorkItem";
import Image from "next/image";
import GuildImage from "../../../assets/guild.png";
import ShareSplitImage from "../../../assets/sharesplit.png";
import AnnaPortfolioImage from "../../../assets/annasPortfolio.png";
import PortalImage from "../../../assets/portal.png";
import AgencyImage from "../../../assets/agency-site.png";

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
          <span className="heading-gradient">Select Projects</span>
        </motion.h3>
      </Row>
      <WorkItem
        image={
          <Image
            src={AgencyImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["Astro", "Preact", "TailwindCSS"]}
        name={"Toastr Agency Site"}
        description={
          "Ultra high performance site for Toastr, an agency aimed at providing fast, stylish websites for service-based businesses."
        }
        link="https://toastr.com.au/"
        github="https://github.com/alxx9991/toastr-astro"
      ></WorkItem>
      <WorkItem
        image={
          <Image
            src={PortalImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["React", "Redux", "TailwindCSS", "Flask"]}
        name={"Medical Image Segmentation Portal"}
        description={
          "Frontend for web portal which allows researchers to upload medical images to a machine learning server to perform automatic cancer cell identification, and download the completed masks."
        }
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
          "Free, accessible online web app allowing people to split bills, and calculate amounts owing to each other. Built with Firebase as a Backend-as-a-Service."
        }
        link="https://share-split.netlify.app/"
        github="https://github.com/alxx9991/split-share"
      ></WorkItem>
      <WorkItem
        image={
          <Image
            src={AnnaPortfolioImage}
            width={864}
            height={445}
            loading="eager"
          ></Image>
        }
        technologies={["React", "NextJS", "TailwindCSS"]}
        name={"Anna's Portfolio"}
        description={
          "Aesthetic, animated portfolio for a product designer built with modern Javascript and CSS frameworks."
        }
        link={"https://www.annahe.xyz/"}
        github={"https://github.com/alxx9991/annas-portfolio"}
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
          "Website landing page for building a community of entrepreneurs and freelancers. Built with Prismic as a headless content management system."
        }
        github="https://github.com/Guild-of-Entrepreneurs/site"
        link="https://www.guildofentrepreneurs.com/"
      ></WorkItem>
    </div>
  );
};

export default Work;

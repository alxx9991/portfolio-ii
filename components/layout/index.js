import Header from "../sections/Header";
import Footer from "../sections/Footer";
import BackgroundImage from "../../assets/background-thingys.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Layout = (props) => {
  return (
    <div className="full-grid relative" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
        className="background"
      >
        <Image src={BackgroundImage} objectFit="cover" layout="fill"></Image>
      </motion.div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

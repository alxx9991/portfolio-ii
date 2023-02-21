import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const Layout = (props) => {
  return (
    <div className="full-grid relative" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="background"
      >
        <Image
          src="/background-thingys.svg"
          objectFit="cover"
          layout="fill"
        ></Image>
      </motion.div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

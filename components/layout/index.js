import Header from "../sections/Header";
import Footer from "../sections/Footer";
import BackgroundImage from "../../assets/background-thingys.png";
import Image from "next/image";

const Layout = (props) => {
  return (
    <div className="perspective-wrapper">
      <div className="full-grid relative">
        <div className="background">
          <Image src={BackgroundImage} objectFit="cover" layout="fill"></Image>
        </div>
        <Header></Header>
        {props.children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;

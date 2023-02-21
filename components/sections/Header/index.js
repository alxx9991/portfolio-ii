import Nav from "./Nav";
import useScrollDirection from "../../../hooks/useScrollDirection";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { motion } from "framer-motion";

const Header = () => {
  const scrollDir = useScrollDirection();
  const scrollPosition = useScrollPosition();

  const headerClasses =
    "full-width-section flex-row backdrop-blur-2xl z-10 sticky top-0 grid justify-between min-h-0 -mx-10 md:mx-0";

  return (
    <motion.header
      id="home"
      className={headerClasses}
      animate={{
        y: scrollDir === "up" ? 0 : "-100%",
        boxShadow:
          scrollPosition <= 0
            ? "0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Nav></Nav>
    </motion.header>
  );
};

export default Header;

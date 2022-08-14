import { motion } from "framer-motion";

const StackItem = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0,
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 0.8 }}
      className="flex flex-col items-center gap-4"
    >
      <div>{props.children}</div>
      <p>{props.description}</p>
    </motion.div>
  );
};

export default StackItem;

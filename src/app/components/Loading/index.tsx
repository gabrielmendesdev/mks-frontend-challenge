import "./styles.scss";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="box bg-blue-700 w-6 h-6"
      initial={{
        scale: 0
      }}
      
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.1
      }}
    />
  );
}
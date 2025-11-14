import { motion } from "framer-motion";

export default function AnimatedText({ children, className = "" }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.span>
  );
}

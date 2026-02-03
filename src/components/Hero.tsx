import { AnimatePresence, motion } from "framer-motion";
import HeroVariantA from "./HeroVariantA";
import HeroVariantB from "./HeroVariantB";

interface HeroProps {
  variant?: "A" | "B";
}

const Hero = ({ variant = "A" }: HeroProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={variant}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {variant === "A" ? <HeroVariantA /> : <HeroVariantB />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;

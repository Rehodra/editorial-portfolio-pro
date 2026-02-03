import { motion } from "framer-motion";
import { ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Skills Expertise" },
];

const HeroVariantA = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      {/* Decorative Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full border border-border/30 hidden lg:block"
      />

      {/* Background Portrait Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 right-0 lg:right-[10%] h-[75%] lg:h-[85%] w-auto pointer-events-none hidden md:block"
      >
        <img
          src={developerPortrait}
          alt="Developer portrait"
          className="h-full w-auto object-contain object-bottom grayscale opacity-60"
        />
        {/* Gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full editorial-grid">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base mb-6 flex items-center gap-2"
            >
              Greeting, What's Up <span className="text-xl">👋</span>
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              Full-Stack Developer Building Modern,
              <br className="hidden lg:block" />
              Scalable Solutions,{" "}
              <span className="text-muted-foreground">
                Writing One Line Of
                <br className="hidden lg:block" />
                Code At A Time
              </span>
              <span className="text-accent">*</span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-sm md:text-base max-w-md mb-10 leading-relaxed"
            >
              I develop high-performance websites and that are built to scale. From clean UI to robust backend architecture, every product I build is focused on performance, usability.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-6 text-sm font-medium group"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Stats */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center items-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-row lg:flex-col gap-8 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-right"
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 lg:mt-16"
            >
              <div className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <Circle className="w-2 h-2 fill-accent text-accent animate-pulse" />
                <span className="text-xs text-foreground">Available for Work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Watermark Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <div className="watermark-text whitespace-nowrap -mb-8 md:-mb-16">
          MOUNASUVRA
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVariantA;

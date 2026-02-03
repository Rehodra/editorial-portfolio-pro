import { motion } from "framer-motion";
import { ArrowRight, Circle, Image, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

const stats = [
  { value: "5+", label: "Projects", sublabel: "Completed", icon: Image },
  { value: "4+", label: "Hackathons", sublabel: "Participated", icon: Sparkles },
  { value: "10+", label: "Coding", sublabel: "Skills Expertise", icon: Users },
];

const HeroVariantA = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      {/* Vertical decorative lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 left-[8%] w-px bg-border/30" />
        <div className="absolute top-0 bottom-0 right-[8%] w-px bg-border/30" />
        <div className="absolute top-0 bottom-0 right-[35%] w-px bg-border/30" />
      </div>

      {/* Background Portrait Image - Larger and more centered */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 right-[15%] xl:right-[20%] pointer-events-none hidden lg:flex items-end justify-center"
        style={{ height: "95%" }}
      >
        {/* Larger image container */}
        <div className="relative w-[550px] h-[700px] xl:w-[600px] xl:h-[750px]">
          {/* The masked image with edge fade */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage: "radial-gradient(ellipse 80% 85% at 50% 55%, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 55%, black 30%, transparent 70%)",
            }}
          >
            <img
              src={developerPortrait}
              alt="Developer portrait"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          
          {/* Additional fade overlay for smoother blending */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 90% 95% at 50% 55%, transparent 20%, hsl(var(--background)) 70%)",
            }}
          />
        </div>

        {/* Scribble decoration near portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute top-[30%] left-[-5%]"
        >
          <svg width="100" height="70" viewBox="0 0 100 70" fill="none" className="text-foreground/70">
            <path 
              d="M10 35 Q25 10 40 35 Q55 60 70 35 Q85 10 95 35" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d="M5 40 Q20 15 35 40 Q50 65 65 40 Q80 15 90 40" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d="M15 30 Q30 5 45 30 Q60 55 75 30 Q90 5 100 30" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Stats positioned on the right side, overlapping portrait area */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-[8%] top-[25%] hidden lg:flex flex-col gap-6 z-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className="flex items-center gap-3 text-right"
          >
            <div className="flex flex-col items-end">
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-foreground" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Available For Work Badge - positioned over portrait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute right-[18%] xl:right-[22%] bottom-[18%] hidden lg:block z-20"
      >
        <div className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full">
          <Circle className="w-2.5 h-2.5 fill-accent text-accent" />
          <span className="text-sm font-medium">Available For Work</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="max-w-2xl">
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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              Full-Stack Developer Building Modern,
              <br className="hidden md:block" />
              Scalable Solutions,{" "}
              <span className="text-muted-foreground">
                Writing One Line Of
                <br className="hidden md:block" />
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

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
        <div className="absolute top-0 bottom-0 right-[25%] w-px bg-border/30" />
      </div>

      {/* Background Portrait Image with circular mask and fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 right-[5%] lg:right-[15%] pointer-events-none hidden md:flex items-end justify-center"
        style={{ height: "85%" }}
      >
        {/* Circular container with radial fade */}
        <div className="relative w-[400px] h-[500px] lg:w-[450px] lg:h-[550px]">
          {/* The circular masked image */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 70%)",
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
              background: "radial-gradient(ellipse 80% 90% at 50% 50%, transparent 20%, hsl(var(--background)) 70%)",
            }}
          />
        </div>

        {/* Decorative scribble element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute top-[15%] right-[10%] lg:right-[5%]"
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-foreground/80">
            <path 
              d="M10 30 Q20 10 30 30 Q40 50 50 30 Q60 10 70 30" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d="M15 35 Q25 15 35 35 Q45 55 55 35 Q65 15 75 35" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d="M5 25 Q15 5 25 25 Q35 45 45 25 Q55 5 65 25" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Decorative diamond/gem element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-[25%] left-[-10%] lg:left-[-5%]"
        >
          <div className="w-12 h-12 bg-muted/30 backdrop-blur-sm rounded-lg rotate-45 border border-border/50 flex items-center justify-center">
            <span className="text-xl -rotate-45">💎</span>
          </div>
        </motion.div>
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
              className="flex flex-row lg:flex-col gap-8 lg:gap-8"
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
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
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

            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 lg:mt-16"
            >
              <div className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full">
                <Circle className="w-2.5 h-2.5 fill-accent text-accent" />
                <span className="text-sm font-medium">Available For Work</span>
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

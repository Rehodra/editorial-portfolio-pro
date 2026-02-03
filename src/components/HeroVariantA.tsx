import { motion } from "framer-motion";
import { ArrowRight, Circle, ImageIcon, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

const stats = [
  { value: "5+", label: "Projects", sublabel: "Completed", icon: ImageIcon },
  { value: "4+", label: "Hackathons", sublabel: "Participated", icon: Sparkles },
  { value: "10+", label: "Coding", sublabel: "Skills Expertise", icon: Users },
];

const HeroVariantA = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* 12-Column Editorial Grid Overlay - MANDATORY */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Responsive 12-column grid lines */}
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-foreground/[0.04]"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
      </div>

      {/* Additional decorative vertical lines for depth */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute top-0 bottom-0 right-[25%] w-px bg-foreground/[0.06]" />
        <div className="absolute top-0 bottom-0 right-[15%] w-px bg-foreground/[0.08]" />
      </div>

      {/* Subtle radial glow behind portrait area */}
      <div 
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 65% 60%, hsl(var(--foreground) / 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Background Portrait Image - Bottom-right anchored */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-0 right-[5%] xl:right-[10%] pointer-events-none hidden lg:flex items-end justify-center z-[1]"
        style={{ height: "100%" }}
      >
        <div className="relative w-[550px] h-[750px] xl:w-[650px] xl:h-[850px] 2xl:w-[700px] 2xl:h-[900px]">
          {/* Soft radial shadow behind the face */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 45%, hsl(var(--foreground) / 0.06) 0%, transparent 50%)",
            }}
          />
          
          {/* The masked image with soft circular gradient fade - IMPROVED */}
          <div 
            className="absolute inset-0 overflow-hidden z-[1]"
            style={{
              maskImage: "radial-gradient(ellipse 65% 70% at 50% 45%, black 20%, transparent 55%)",
              WebkitMaskImage: "radial-gradient(ellipse 65% 70% at 50% 45%, black 20%, transparent 55%)",
            }}
          >
            <img
              src={developerPortrait}
              alt="Developer portrait"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          
          {/* Additional fade overlay for smoother blending into background - STRONGER */}
          <div 
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background: "radial-gradient(ellipse 75% 80% at 50% 45%, transparent 10%, hsl(var(--background)) 55%)",
            }}
          />
        </div>

        {/* Scribble decoration near portrait - matches reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute top-[32%] left-[5%] xl:left-[10%] z-[5]"
        >
          <svg width="100" height="70" viewBox="0 0 100 70" fill="none" className="text-foreground/60">
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

      {/* Right-Side Stats Column - BIGGER and more prominent */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-[2%] xl:right-[3%] top-[22%] hidden lg:flex flex-col gap-12 z-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
            className="flex items-center gap-5 text-right"
          >
            <div className="flex flex-col items-end">
              <div className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground leading-none">
                {stat.value}
              </div>
              <div className="text-sm xl:text-base text-muted-foreground mt-1">
                {stat.label}
              </div>
              <div className="text-sm xl:text-base text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
            <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-xl bg-secondary/50 border border-border/60 flex items-center justify-center">
              <stat.icon className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-foreground/80" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Available For Work Badge - positioned perfectly near portrait bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute right-[18%] xl:right-[22%] 2xl:right-[25%] bottom-[22%] xl:bottom-[24%] hidden lg:block z-20"
      >
        <div className="flex items-center gap-3 bg-foreground text-background px-6 py-3.5 xl:px-7 xl:py-4 rounded-full shadow-xl">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(142, 76%, 45%)' }} />
          <span className="text-sm xl:text-base font-medium tracking-wide">Available For Work</span>
        </div>
      </motion.div>

      {/* Main Content - Left-aligned with proper z-index */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Left Content - constrained width */}
          <div className="max-w-xl xl:max-w-2xl">
            {/* Greeting line above headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base mb-6 flex items-center gap-2 font-light tracking-wide"
            >
              Greeting, What's Up <span className="text-xl">👋</span>
            </motion.p>

            {/* Headline with exact hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-foreground">Full-Stack Developer Building Modern,</span>
              <br className="hidden md:block" />
              <span className="text-foreground">Scalable Solutions,</span>{" "}
              <span className="text-muted-foreground">
                Writing One Line Of
                <br className="hidden md:block" />
                Code At A Time
              </span>
              <span className="text-accent">*</span>.
            </motion.h1>

            {/* Subtext - smaller, muted, constrained */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-sm md:text-base max-w-md mb-10 leading-relaxed"
            >
              I develop high-performance websites and that are built to scale. From clean UI to robust backend architecture, every product I build is focused on performance, usability.
            </motion.p>

            {/* Primary CTA - Rounded pill style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-foreground/80 bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-6 text-sm font-medium group hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Watermark Text - CRUCIAL depth element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0"
      >
        <div className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem] font-bold uppercase tracking-tighter text-foreground/[0.025] whitespace-nowrap -mb-6 md:-mb-12 lg:-mb-16">
          MOUNASUVRA
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVariantA;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

const HeroVariantB = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full editorial-grid items-center">
          {/* Left - Portrait in circular mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start mb-12 lg:mb-0 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative emoji */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-8 -left-4 z-20"
              >
                <div className="bg-accent/20 backdrop-blur-sm p-3 rounded-lg border border-accent/30">
                  <span className="text-3xl">🗂️</span>
                </div>
              </motion.div>

              {/* Portrait with circular mask */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-border/50">
                  <img
                    src={developerPortrait}
                    alt="Developer portrait"
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
                {/* Gradient overlays for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              Full-Stack Developer Focused On
              <br className="hidden md:block" />
              Performance, Scale,{" "}
              <span className="text-muted-foreground">
                And Precision —
                <br className="hidden md:block" />
                One Line Of Code At A Time.
              </span>
            </motion.h1>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-foreground text-base md:text-lg mb-8 flex items-center gap-2"
            >
              <span className="text-muted-foreground">◆</span>
              Greeting, I'm Mounasuvra{" "}
              <span className="text-xl">👋</span>
            </motion.p>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 max-w-xl mb-10"
            >
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                I work across every stage of product development, combining intuitive interface design with robust backend engineering and cloud-ready architectures.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                My experience includes developing REST-based services, working with both relational and NoSQL data stores, and deploying applications to AWS with a strong focus on stability and performance.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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

      {/* Decorative vertical lines */}
      <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-border to-transparent hidden lg:block" />
      <div className="absolute bottom-0 right-1/3 w-px h-48 bg-gradient-to-t from-border to-transparent hidden lg:block" />
    </section>
  );
};

export default HeroVariantB;

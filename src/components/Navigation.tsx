import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onVariantToggle?: () => void;
  currentVariant?: "A" | "B";
}

const Navigation = ({ onVariantToggle, currentVariant = "A" }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-6"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-foreground font-bold text-lg tracking-tight"
        >
          MOUNA<span className="text-muted-foreground">SUVRA.</span>
        </motion.div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Variant Toggle (for demo) */}
          {onVariantToggle && (
            <button
              onClick={onVariantToggle}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1 border border-border rounded-full"
            >
              Variant {currentVariant}
            </button>
          )}

          {/* CTA Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex rounded-full border-border bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-5"
          >
            Let's Talk
            <span className="ml-1">→</span>
          </Button>

          {/* Menu Icon */}
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300">
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Index = () => {
  const [heroVariant, setHeroVariant] = useState<"A" | "B">("A");

  const toggleVariant = () => {
    setHeroVariant((prev) => (prev === "A" ? "B" : "A"));
  };

  return (
    <main className="relative">
      <Navigation 
        onVariantToggle={toggleVariant} 
        currentVariant={heroVariant} 
      />
      <Hero variant={heroVariant} />
    </main>
  );
};

export default Index;

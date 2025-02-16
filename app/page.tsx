"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { QuizModal } from "@/components/quiz-modal";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { OurStory } from "@/components/our-story";
import { StoriesOfIndia } from "@/components/stories-of-india";
import { Comparisons } from "@/components/comparisons";
import { DailyRituals } from "@/components/daily-rituals"
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="bg-unblend-blue">
      <Navbar />
      <Hero />
      <OurStory />
      <Features />
      <DailyRituals />
      <StoriesOfIndia />
      <QuizModal />
      <Footer />
    </main>
  );
}

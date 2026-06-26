"use client";

import { motion } from "framer-motion";

import TopNavbar from "@/components/TopNavbar";
import GreetingSection from "@/components/HomePage/GreetingSection";
import LocationCard from "@/components/HomePage/LocationCard";
import PromoBanner from "@/components/HomePage/PromoBanner";
import QuickActions from "@/components/HomePage/QuickActions";
import WorkerTrackingCard from "@/components/HomePage/WorkerTrackingCard";
import TrustSection from "@/components/HomePage/TrustSection";
import ReferralCard from "@/components/HomePage/ReferralCard";
import BottomNav from "@/components/BottomNav";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-40 left-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <TopNavbar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          max-w-md
          mx-auto
          px-4
          pt-6
          pb-28
          space-y-5
        "
      >
        <motion.div variants={itemVariants}>
          <GreetingSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <LocationCard />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
        >
          <PromoBanner />
        </motion.div>

        <motion.div variants={itemVariants}>
          <QuickActions />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
        >
          <WorkerTrackingCard />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TrustSection />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
          }}
        >
          <ReferralCard />
        </motion.div>
      </motion.div>

      <BottomNav />
    </main>
  );
}
"use client";

import { motion } from "framer-motion";

import CommonHeader from "@/components/CommonHeader";
import ServiceSelector from "@/components/ServiceSelector";
import OfferInput from "@/components/OfferInput";
import LocationCard from "@/components/HomePage/LocationCard";
import ScheduleSelector from "@/components/ScheduleSelector";
import PrimaryButton from "@/components/PrimaryButton";

export default function NewRequestPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <CommonHeader title="New Request" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto px-4 py-8 pb-28 space-y-8"
      >
        <ServiceSelector />

        <OfferInput />

        <LocationCard />

        <ScheduleSelector />
      </motion.div>

      <div className="fixed bottom-6 left-0 right-0 max-w-md mx-auto px-4">
        <PrimaryButton title="Find Workers" />
      </div>
    </main>
  );
}
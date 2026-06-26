"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import TopNavbar from "@/components/TopNavbar";
import BottomNav from "@/components/BottomNav";

export default function RequestsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] pb-28">
      <TopNavbar />

      <section className="max-w-md mx-auto px-4 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[36px] font-bold text-[#1F2937]">
            My Bookings
          </h1>

          <p className="mt-2 text-[#6B7280] text-lg">
            Track your ongoing and past labor requests.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl p-1 shadow-sm flex border border-[#F2D3C7]">
            <button
              className="
                flex-1
                py-3
                rounded-xl
                bg-[#FF5404]
                text-white
                font-semibold
                transition-all
              "
            >
              Active (2)
            </button>

            <button
              className="
                flex-1
                py-3
                text-[#5F4B42]
                hover:text-[#FF5404]
                transition
              "
            >
              Completed
            </button>

            <button
              className="
                flex-1
                py-3
                text-[#5F4B42]
                hover:text-[#FF5404]
                transition
              "
            >
              Cancelled
            </button>
          </div>
        </motion.div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            y: -4,
          }}
          className="
            mt-6
            bg-white
            rounded-3xl
            border
            border-[#F2B8A0]
            shadow-lg
            overflow-hidden
          "
        >
          <div className="flex">
            {/* Left Orange Strip */}
            <div className="w-2 bg-[#FF5404]" />

            <div className="flex-1 p-5">
              {/* Top */}
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="Worker"
                    width={55}
                    height={55}
                    className="
                      rounded-full
                      border-2
                      border-orange-100
                    "
                  />

                  <div>
                    <h3 className="font-semibold text-lg text-[#1F2937]">
                      Rakesh Kumar
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      ⭐ 4.8
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <h3 className="text-4xl font-bold text-[#FF5404]">
                    ₹850
                  </h3>

                  <p className="text-xs text-gray-500">
                    Est. Budget
                  </p>
                </div>
              </div>

              {/* Job Type */}
              <h2 className="mt-4 text-3xl font-semibold text-[#1F2937]">
                Labour
              </h2>

              {/* Status Badge */}
              <div className="mt-4">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1
                    rounded-full
                    bg-orange-50
                    text-[#FF5404]
                    text-sm
                    font-medium
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active Request
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-[#F2D3C7] mt-5 pt-4">
                <div className="flex items-center gap-3">
                  {/* Call */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#F3F4F6]
                      hover:bg-[#E5E7EB]
                      transition
                      flex
                      items-center
                      justify-center
                    "
                  >
                    📞
                  </motion.button>

                  {/* Details */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="
                      flex-1
                      h-12
                      rounded-full
                      bg-[#FF5404]
                      text-white
                      font-semibold
                      hover:bg-[#FF5404]
                      transition-all
                    "
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empty Space for Additional Cards */}
        <div className="h-10" />
      </section>

      <BottomNav />
    </main>
  );
}
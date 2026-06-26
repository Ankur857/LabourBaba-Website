"use client";

import { motion } from "framer-motion";

import TopNavbar from "@/components/TopNavbar";
import BottomNav from "@/components/BottomNav";

import {
  Check,
  Car,
  Star,
  Receipt,
  Clock,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Worker Accepted",
    time: "2m ago",
    icon: Check,
    color: "bg-[#FF5404]",
    description:
      "Raju has accepted your plumbing request and is preparing to head out.",
    action: "View details",
  },
  {
    id: 2,
    title: "Worker Arriving",
    time: "15m ago",
    icon: Car,
    color: "bg-[#FF5404]",
    description:
      "Suresh (Electrician) is arriving in approximately 5 minutes.",
    highlight: true,
  },
  {
    id: 3,
    title: "Review Request",
    time: "Yesterday",
    icon: Star,
    color: "bg-[#FF5404]",
    description:
      "Your carpentry job with Amit was completed. How was the service?",
    review: true,
  },
];

export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] pb-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-40 left-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <TopNavbar />

      <section className="max-w-md mx-auto px-4 pt-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-[#1F2937]">
            Alerts
          </h1>

          <p className="mt-2 text-[#6B7280] text-lg">
            Stay updated on your recent requests.
          </p>
        </motion.div>

        {/* Notification Cards */}
        <div className="mt-8 space-y-4">
          {notifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`
                  bg-white
                  rounded-3xl
                  border
                  border-[#E2BFB0]
                  shadow-md
                  overflow-hidden
                  ${
                    item.highlight
                      ? "border-l-[5px] border-l-[#FF5404]"
                      : ""
                  }
                `}
              >
                <div className="p-5">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        ${item.color}
                      `}
                    >
                      <Icon
                        size={22}
                        className="text-white"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-xl text-[#1F2937]">
                          {item.title}
                        </h3>

                        <span className="text-sm text-gray-500">
                          {item.time}
                        </span>
                      </div>

                      <p className="mt-2 text-[#5F4B42] leading-7">
                        {item.description}
                      </p>

                      {/* Accepted */}
                      {item.action && (
                        <button
                          className="
                            mt-4
                            text-[#FF5404]
                            font-medium
                            hover:underline
                          "
                        >
                          {item.action}
                        </button>
                      )}

                      {/* Arriving */}
                      {item.highlight && (
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(255,107,0,0)",
                              "0 0 20px rgba(255,107,0,0.15)",
                              "0 0 0 rgba(255,107,0,0)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="
                            mt-4
                            bg-[#F7F8FA]
                            rounded-2xl
                            p-4
                            flex
                            items-center
                            justify-between
                          "
                        >
                          <div>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                              <Clock size={14} />
                              Est. Arrival
                            </p>

                            <h4 className="font-bold text-lg">
                              10:45 AM
                            </h4>
                          </div>

                          <button
                            className="
                              px-4
                              py-2
                              rounded-full
                              bg-blue-100
                              text-blue-700
                              font-medium
                            "
                          >
                            Track
                          </button>
                        </motion.div>
                      )}

                      {/* Review */}
                      {item.review && (
                        <div className="flex gap-2 mt-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={22}
                              className="text-orange-300"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Last Week */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="my-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E2BFB0]" />

            <span className="text-sm tracking-widest text-gray-500">
              LAST WEEK
            </span>

            <div className="h-px flex-1 bg-[#E2BFB0]" />
          </div>
        </motion.div>

        {/* Old Notification */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            bg-white
            rounded-3xl
            border
            border-[#E2BFB0]
            shadow-sm
            p-5
          "
        >
          <div className="flex gap-4">
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-gray-100
                flex
                items-center
                justify-center
              "
            >
              <Receipt size={22} />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-bold text-xl">
                  Payment Confirmed
                </h3>

                <span className="text-gray-500">
                  Oct 24
                </span>
              </div>

              <p className="mt-2 text-[#5F4B42]">
                ₹450 paid to Mahesh for cleaning
                services.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="h-8" />
      </section>

      <BottomNav />
    </main>
  );
}
"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

export default function ScheduleSelector() {
  const [selectedOption, setSelectedOption] = useState<"Now" | "Later">("Now");

  const [selectedDate, setSelectedDate] = useState<Date>();

  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="space-y-5">

      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#1F2937]">
        When do you need them?
      </h2>

      {/* Toggle */}
      <div className="bg-[#F1F3F5] rounded-2xl p-1 flex shadow-sm">

        {/* NOW */}
        <button
          onClick={() => setSelectedOption("Now")}
          className={`flex-1 h-14 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
            selectedOption === "Now"
              ? "bg-white shadow text-[#FF6B00]"
              : "text-gray-600"
          }`}
        >
          <Clock size={18} />
          Now (Urgent)
        </button>

        {/* LATER */}
        <button
          onClick={() => setSelectedOption("Later")}
          className={`flex-1 h-14 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
            selectedOption === "Later"
              ? "bg-white shadow text-[#FF6B00]"
              : "text-gray-600"
          }`}
        >
          <Calendar size={18} />
          Schedule Later
        </button>
      </div>

      {/* Calendar */}
      {selectedOption === "Later" && (
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-[#E2BFB0]
            shadow-lg
            p-5
            animate-in
            fade-in
            duration-300
          "
        >
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={{ before: new Date() }}
          />

          {/* Time Picker */}
          {/* <div className="mt-6">

            <label className="block mb-2 font-semibold text-[#1F2937]">
              Select Time
            </label>

            <input
              type="time"
              value={selectedTime}
              onChange={(e) =>
                setSelectedTime(e.target.value)
              }
              className="
                w-full
                h-14
                rounded-xl
                border
                border-[#E2BFB0]
                px-4
                outline-none
                focus:border-[#FF6B00]
                focus:ring-2
                focus:ring-orange-100
              "
            />
          </div> */}

          {/* Summary */}
          {selectedDate && selectedTime && (
            <div
              className="
                mt-6
                rounded-2xl
                bg-orange-50
                border
                border-orange-200
                p-4
              "
            >
              <p className="text-sm text-gray-500">
                Scheduled For
              </p>

              <p className="mt-2 text-lg font-semibold text-[#FF6B00]">
                📅{" "}
                {format(
                  selectedDate,
                  "EEEE, dd MMM yyyy"
                )}
              </p>

              {/* <p className="mt-1 text-lg font-semibold text-[#FF6B00]">
                🕒 {selectedTime}
              </p> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
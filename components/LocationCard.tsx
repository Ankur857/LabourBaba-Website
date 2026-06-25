import { LocateFixed, ChevronDown } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#FF5404] shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
          <LocateFixed className="text-orange-500" />
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gray-400">
            CURRENT LOCATION
          </p>

          <p className="font-semibold text-gray-800">
            402, Shiv Shakti Apts
          </p>
        </div>
      </div>

      <ChevronDown />
    </div>
  );
}
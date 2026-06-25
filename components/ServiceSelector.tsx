"use client";

import { Hammer, Wrench } from "lucide-react";
import { useState } from "react";

export default function ServiceSelector() {
  const [selected, setSelected] = useState("Mason");

  const services = [
    {
      title: "Mason",
      icon: Hammer,
    },
    {
      title: "Labour",
      icon: Wrench,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">
        Service Required
      </h2>

      <div className="flex gap-4">
        {services.map((service) => {
          const Icon = service.icon;

          const active =
            selected === service.title;

          return (
            <button
              key={service.title}
              onClick={() =>
                setSelected(service.title)
              }
              className={`
                px-6
                h-12
                rounded-full
                border
                transition-all
                flex
                items-center
                gap-2
                ${
                  active
                    ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                    : "bg-white border-[#E2BFB0]"
                }
              `}
            >
              <Icon size={18} />

              {service.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
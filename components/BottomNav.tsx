"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/Home",
    activeIcon: "/HomeIcon.svg",
    inactiveIcon: "/HomeIcon2.svg",
  },
  {
    label: "Requests",
    href: "/Requests",
    activeIcon: "/Requests.svg",
    inactiveIcon: "/Requests2.svg",
  },
  {
    label: "Alerts",
    href: "/Alerts",
    activeIcon: "/NotificationIcon.svg",
    inactiveIcon: "/NotificationIcon2.svg",
    hasNotification: true,
  },
  {
    label: "Profile",
    href: "/Profile",
    activeIcon: "/ProfileIcon.svg",
    inactiveIcon: "/ProfileIcon2.svg",
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      className="
        fixed
        pt-2
        pb-2
        bottom-0
        left-0
        right-0
        max-w-md
        mx-auto
        bg-white
        border-[#E2BFB0]
        shadow-[0_-6px_20px_rgba(0,0,0,0.12)]
        z-50
      "
    >
      <div className="h-18.5 flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center"
            >
              {/* Notification Dot */}
              {item.hasNotification && (
                <span
                  className="
                    absolute
                    top-0
                    right-2
                    w-2
                    h-2
                    rounded-full
                    bg-red-500
                  "
                />
              )}

              {/* Active Circle */}
              <div
                className={`
                  w-20
                  h-12
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[#FF5404] rounded-full"
                      : ""
                  }
                `}
              >
                <Image
                  src={
                    isActive
                      ? item.activeIcon
                      : item.inactiveIcon
                  }
                  alt={item.label}
                  width={22}
                  height={22}
                />
              </div>

              <span
                className={`
                  text-[12px]
                  mt-1
                  font-medium
                  ${
                    isActive
                      ? "text-[#FF5404]"
                      : "text-[#475569]"
                  }
                `}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
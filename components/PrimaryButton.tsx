import { Search } from "lucide-react";

interface Props {
  title: string;
}

export default function PrimaryButton({
  title,
}: Props) {
  return (
    <button
      className="
        w-full
        h-16
        rounded-2xl
        bg-[#FF6B00]
        text-white
        text-xl
        font-semibold
        flex
        items-center
        justify-center
        gap-2
        shadow-lg
        hover:bg-orange-600
        transition
      "
    >
      {title}
      <Search size={22} />
    </button>
  );
}
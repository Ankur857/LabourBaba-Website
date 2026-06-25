export default function PromoBanner() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-orange-800 to-orange-500 text-white p-6">
      <span className="bg-orange-700 px-3 py-1 rounded text-xs font-bold">
        FIRST TIME USER
      </span>

      <h2 className="text-4xl font-bold mt-4">
        50% Off First Job
      </h2>

      <p className="mt-2">
        Use code WELCOME50
      </p>

      <button className="mt-4 bg-white text-orange-700 px-4 py-2 rounded-xl font-semibold">
        Book Now
      </button>
    </div>
  );
}
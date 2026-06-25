export default function OfferInput() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">
        Your Offer (₹)
      </h2>

      <input
        placeholder="450"
        className="
          w-full
          h-16
          rounded-2xl
          border
          border-[#E2BFB0]
          bg-white
          px-5
          text-3xl
          outline-none
        "
      />

      <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-[#64748B]">
        ℹ Suggested market price:
        <span className="font-semibold">
          ₹400 - ₹600
        </span>
      </div>
    </div>
  );
}
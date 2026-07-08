export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <span className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-20 animate-ping" />
          <span className="relative grid place-items-center w-12 h-12 rounded-2xl bg-brand-gradient text-white text-sm font-semibold">
            SM
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" />
        </div>
      </div>
    </div>
  );
}

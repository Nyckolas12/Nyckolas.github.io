// Floating domain badge shown on each page
export default function GodBadge({ god }) {
  return (
    <div className="fixed bottom-8 right-8 z-40 text-right select-none pointer-events-none">
      <p
        className="font-cinzel-decorative text-4xl font-bold opacity-5 leading-none"
        style={{ color: god.primary }}
      >
        {god.symbol}
      </p>
      <p
        className="font-cinzel text-xs tracking-[0.3em] uppercase mt-1"
        style={{ color: god.primary, opacity: 0.35 }}
      >
        {god.domain}
      </p>
    </div>
  );
}

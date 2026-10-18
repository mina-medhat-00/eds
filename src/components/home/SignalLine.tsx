export default function SignalLine({ className = "" }) {
  return (
    <div
      className={`relative h-px w-full overflow-hidden bg-border ${className}`}
    >
      <div className="absolute inset-y-0 left-0 w-full origin-left signal-sweep bg-[hsl(189_100%_50%)]" />
    </div>
  );
}

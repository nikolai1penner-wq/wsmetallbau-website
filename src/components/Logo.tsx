/** Logo „W & S“ mit den vier Petrol-Streifen, nachgebaut als SVG nach logo-ws.jpg */
export function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg aria-hidden="true" width={small ? 60 : 72} height={small ? 20 : 24} viewBox="0 0 120 40">
        <polygon points="0,40 16,40 40,0 24,0" fill="var(--petrol)" />
        <polygon points="26,40 42,40 66,0 50,0" fill="var(--petrol)" />
        <polygon points="52,40 68,40 92,0 76,0" fill="var(--petrol)" />
        <polygon points="78,40 120,40 120,0 102,0" fill="var(--petrol)" />
      </svg>
      <span className={`font-display font-extrabold tracking-[0.04em] text-white ${small ? "text-[22px]" : "text-[28px]"}`}>W &amp; S</span>
    </span>
  );
}

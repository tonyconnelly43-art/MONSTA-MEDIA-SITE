export function MonsterMascot({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Monsta Media & Design monster mascot"
    >
      <circle cx="50" cy="55" r="38" fill="#D62828" />
      <path d="M20 40 L28 15 L38 35 Z" fill="#D62828" />
      <path d="M80 40 L72 15 L62 35 Z" fill="#D62828" />
      <circle cx="36" cy="52" r="9" fill="#FFF7EC" />
      <circle cx="64" cy="52" r="9" fill="#FFF7EC" />
      <circle cx="36" cy="52" r="4" fill="#0A1930" />
      <circle cx="64" cy="52" r="4" fill="#0A1930" />
      <path d="M32 72 Q50 88 68 72" stroke="#0A1930" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M36 72 L40 80 M44 74 L46 82 M56 74 L54 82 M64 72 L60 80" stroke="#FFF7EC" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

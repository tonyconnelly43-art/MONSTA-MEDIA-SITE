export function MonsterMascot({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Monsta Media & Design monster mascot">
      <ellipse cx="60" cy="108" rx="34" ry="6" fill="#0A1930" opacity="0.15" />

      {/* horns */}
      <path d="M28 46 L18 14 L38 38 Z" fill="#A11E1E" />
      <path d="M92 46 L102 14 L82 38 Z" fill="#A11E1E" />

      {/* head */}
      <circle cx="60" cy="62" r="42" fill="#D62828" />

      {/* spots */}
      <circle cx="30" cy="80" r="5" fill="#A11E1E" opacity="0.6" />
      <circle cx="92" cy="72" r="4" fill="#A11E1E" opacity="0.6" />

      {/* eyes */}
      <circle cx="42" cy="58" r="12" fill="#FFF7EC" />
      <circle cx="78" cy="58" r="12" fill="#FFF7EC" />
      <circle cx="44" cy="58" r="5.5" fill="#0A1930" />
      <circle cx="76" cy="58" r="5.5" fill="#0A1930" />
      <circle cx="46" cy="56" r="1.6" fill="#FFF7EC" />
      <circle cx="78" cy="56" r="1.6" fill="#FFF7EC" />

      {/* mouth */}
      <path d="M34 82 Q60 104 86 82 Q60 92 34 82 Z" fill="#0A1930" />
      <path
        d="M40 83 L44 91 M50 87 L52 95 M60 88 L60 96 M70 87 L68 95 M80 83 L76 91"
        stroke="#FFF7EC"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

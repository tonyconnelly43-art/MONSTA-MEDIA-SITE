import Image from 'next/image';

export function MonsterMascot({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <Image
      src="/monstaman.png"
      alt="Monsta Media & Design monster mascot"
      width={614}
      height={622}
      className={`${className} object-contain`}
    />
  );
}

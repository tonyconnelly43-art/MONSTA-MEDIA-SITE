import Image from 'next/image';

/** The monster mascot standing beside the MD shield emblem — the site's paired brand mark. */
export function BrandMark({
  className,
  emblemClassName = 'h-32 w-auto',
  mascotClassName = '-ml-6 h-28 w-auto',
  priority = false,
}: {
  className?: string;
  emblemClassName?: string;
  mascotClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`flex items-center ${className ?? ''}`}>
      <Image
        src="/logo-emblem.png"
        alt=""
        aria-hidden="true"
        width={1856}
        height={1958}
        priority={priority}
        className={emblemClassName}
      />
      <Image
        src="/monstaman.png"
        alt=""
        aria-hidden="true"
        width={1158}
        height={1791}
        priority={priority}
        className={mascotClassName}
      />
    </div>
  );
}

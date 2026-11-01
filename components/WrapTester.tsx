'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, Clipboard, RotateCcw } from 'lucide-react';

type TestMode = {
  id: string;
  label: string;
  sub: string;
  imgStyle?: React.CSSProperties;
  overlay?: 'glare';
};

const TESTS: TestMode[] = [
  { id: 'original', label: 'Original', sub: 'Baseline' },
  { id: '100ft', label: '100 ft', sub: 'Distance blur', imgStyle: { filter: 'blur(3px)' } },
  {
    id: 'squint',
    label: 'Squint',
    sub: 'Half-closed eyes',
    imgStyle: { filter: 'blur(1.5px) contrast(0.65) brightness(1.15)' },
  },
  {
    id: '2sec',
    label: '2-Sec Glance',
    sub: 'A quick look',
    imgStyle: { filter: 'url(#monstaMotionLight) blur(0.5px)' },
  },
  { id: 'mirror', label: 'Mirror', sub: 'Oncoming traffic', imgStyle: { transform: 'scaleX(-1)' } },
  { id: 'bw', label: 'B & W', sub: 'Color-free read', imgStyle: { filter: 'grayscale(1)' } },
  {
    id: 'driveby',
    label: 'Drive-By',
    sub: 'Passing at speed',
    imgStyle: { filter: 'url(#monstaMotionHeavy)' },
  },
  { id: 'dusk', label: 'Dusk', sub: 'Low light', imgStyle: { filter: 'brightness(0.5) saturate(0.7)' } },
  { id: 'glare', label: 'Glare', sub: 'Sun on the panel', overlay: 'glare' },
  {
    id: 'colorblind',
    label: 'Colorblind',
    sub: 'Deuteranopia',
    imgStyle: { filter: 'url(#monstaDeuteranopia)' },
  },
];

const DEFAULT_IMAGE = '/van-wrap-music-city-scene.jpg';

function SvgFilterDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="monstaMotionLight">
          <feGaussianBlur stdDeviation="4 0" />
        </filter>
        <filter id="monstaMotionHeavy">
          <feGaussianBlur stdDeviation="10 0" />
        </filter>
        <filter id="monstaDeuteranopia">
          <feColorMatrix
            type="matrix"
            values="0.625 0.375 0 0 0
                    0.7   0.3   0 0 0
                    0     0.3   0.7 0 0
                    0     0     0 1 0"
          />
        </filter>
      </defs>
    </svg>
  );
}

function TestThumb({ test, src }: { test: TestMode; src: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-brand-navy">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" style={test.imgStyle} />
      {test.overlay === 'glare' && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 25%, transparent 55%)',
          }}
        />
      )}
    </div>
  );
}

export function WrapTester() {
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);
  const [isDefault, setIsDefault] = useState(true);
  const [activeId, setActiveId] = useState('original');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadFile = useCallback((file: File | null | undefined) => {
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setImage(url);
    setIsDefault(false);
  }, []);

  useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      const item = Array.from(e.clipboardData?.items ?? []).find((i) => i.type.startsWith('image/'));
      if (item) loadFile(item.getAsFile());
    }
    function onDrop(e: DragEvent) {
      e.preventDefault();
      loadFile(e.dataTransfer?.files?.[0]);
    }
    function onDragOver(e: DragEvent) {
      e.preventDefault();
    }
    window.addEventListener('paste', onPaste);
    window.addEventListener('drop', onDrop);
    window.addEventListener('dragover', onDragOver);
    return () => {
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('dragover', onDragOver);
    };
  }, [loadFile]);

  const activeTest = TESTS.find((t) => t.id === activeId) ?? TESTS[0];

  return (
    <div className="rounded-chunky border-2 border-white/10 bg-brand-navy-light/40 p-5 sm:p-8">
      <SvgFilterDefs />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-chunky bg-brand-red px-5 py-3 text-sm font-display uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Upload Your Wrap
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => loadFile(e.target.files?.[0])}
        />
        <span className="inline-flex items-center gap-2 text-xs text-brand-cream/60">
          <Clipboard className="h-3.5 w-3.5" aria-hidden="true" />
          or paste / drop an image anywhere on the page
        </span>
        {!isDefault && (
          <button
            type="button"
            onClick={() => {
              setImage(DEFAULT_IMAGE);
              setIsDefault(true);
            }}
            className="ml-auto inline-flex items-center gap-1.5 text-xs text-brand-cream/60 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset to example
          </button>
        )}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="relative overflow-hidden rounded-chunky border border-white/10">
            {isDefault && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Example by Monsta
              </span>
            )}
            <div className="relative aspect-[16/9] w-full bg-brand-navy">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Van wrap being tested"
                className="h-full w-full object-cover"
                style={activeTest.imgStyle}
              />
              {activeTest.overlay === 'glare' && (
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 25%, transparent 55%)',
                  }}
                />
              )}
            </div>
          </div>
          <p className="mt-3 text-center font-display text-lg text-white">
            {activeTest.label}
            <span className="ml-2 text-sm font-body font-normal normal-case text-brand-cream/60">
              {activeTest.sub}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2 lg:grid-cols-3">
          {TESTS.map((test) => (
            <button
              key={test.id}
              type="button"
              onClick={() => setActiveId(test.id)}
              className={`rounded-lg p-1 text-left transition-colors ${
                activeId === test.id ? 'ring-2 ring-brand-red' : 'ring-1 ring-white/10 hover:ring-white/30'
              }`}
            >
              <TestThumb test={test} src={image} />
              <p className="mt-1 truncate text-[11px] font-semibold uppercase tracking-wide text-brand-cream/80">
                {test.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

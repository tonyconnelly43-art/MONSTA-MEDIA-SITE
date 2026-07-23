'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { siteConfig } from '@/lib/site-config';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function BrandReviewForm({
  selectedPackage,
  promo,
  promoLabel,
}: {
  selectedPackage?: string;
  promo?: string;
  promoLabel?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-3xl rounded-chunky border-2 border-brand-red/40 bg-white p-8 text-center">
        <p className="font-display text-2xl text-brand-navy">You&apos;re In!</p>
        <p className="mt-2 text-brand-navy/70">
          We got your request and will reach out shortly to schedule your free brand review.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-chunky border-2 border-brand-navy/10 bg-white p-8 text-left"
    >
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />

      {selectedPackage && (
        <>
          <input type="hidden" name="package" value={selectedPackage} />
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-semibold text-brand-red">
            Interested in: {selectedPackage}
          </p>
        </>
      )}

      {promo && (
        <>
          <input type="hidden" name="promo" value={promo} />
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-600">
            {promoLabel ?? `Promo applied: ${promo}`}
          </p>
        </>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-brand-navy">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-brand-navy/20 px-3 py-2.5 text-brand-navy focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-brand-navy">
            Company Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-brand-navy/20 px-3 py-2.5 text-brand-navy focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-brand-navy/20 px-3 py-2.5 text-brand-navy focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-brand-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-brand-navy/20 px-3 py-2.5 text-brand-navy focus:border-brand-red focus:outline-none"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-brand-red">
          {errorMessage} You can also reach us directly at{' '}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold underline">
            {siteConfig.phoneDisplay}
          </a>{' '}
          or{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-chunky bg-brand-red px-6 py-3.5 font-display uppercase tracking-wide text-white shadow-[0_6px_0_0_#7a1414] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#7a1414] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-16"
        >
          {status === 'loading' ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

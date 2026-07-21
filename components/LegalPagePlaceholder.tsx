export function LegalPagePlaceholderNotice({ pageName }: { pageName: string }) {
  return (
    <div className="mb-10 rounded-chunky border-2 border-brand-red bg-brand-red/5 p-6 text-sm text-brand-navy">
      <strong>Draft placeholder:</strong> this {pageName} page could not be copied from the live Wix site
      (the source site was unreachable from this environment). Replace this text with your existing,
      legally-reviewed {pageName} before launch.
    </div>
  );
}

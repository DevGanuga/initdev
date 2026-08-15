'use client';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg border border-gray-200"
    >
      Print
    </button>
  );
}

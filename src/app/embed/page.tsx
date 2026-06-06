'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function EmbedContent() {
  const searchParams = useSearchParams();
  const tool = searchParams.get('tool') || 'pptx-to-pdf';
  
  return (
    <div className="min-h-screen bg-white">
      <iframe
        src={`/en/tools/${tool}`}
        className="w-full border-0"
        style={{ height: '100vh' }}
        title="PDF Tool"
      />
    </div>
  );
}

export default function EmbedPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">加载中...</div>}>
      <EmbedContent />
    </Suspense>
  );
}

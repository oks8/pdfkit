'use client';

export default function EmbedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <iframe
          src="/en/tools/pptx-to-pdf"
          className="w-full h-screen border-0"
          style={{ minHeight: '100vh' }}
          title="PDF Tool"
        />
      </div>
    </div>
  );
}

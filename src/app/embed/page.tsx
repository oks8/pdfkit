'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// 动态导入工具组件，避免 SSR 问题
const ToolContent = dynamic(
  () => import('@/components/tools/ToolContent').then(mod => mod.ToolContent),
  { ssr: false }
);

export default function EmbedPage() {
  const searchParams = useSearchParams();
  const toolId = searchParams.get('tool');
  const [ToolComponent, setToolComponent] = useState<any>(null);

  useEffect(() => {
    if (toolId) {
      // 根据 toolId 动态加载对应的工具
      import(`@/app/[locale]/tools/${toolId}/page`).then(mod => {
        setToolComponent(() => mod.default);
      });
    } else {
      // 默认显示工具列表或首页工具
      import(`@/components/tools/ToolSelector`).then(mod => {
        setToolComponent(() => mod.ToolSelector);
      });
    }
  }, [toolId]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {ToolComponent ? <ToolComponent /> : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-xl font-semibold">加载工具中...</h2>
              <p className="text-muted-foreground mt-2">请稍候</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

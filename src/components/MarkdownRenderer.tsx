'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const serializeMarkdown = async () => {
      const mdxSource = await serialize(content);
      setMdxSource(mdxSource);
    };

    serializeMarkdown();
  }, [content]);

  if (!mdxSource) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
      </div>
    );
  }

  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <MDXRemote {...mdxSource} />
      
      <style jsx global>{`
        .prose h1 {
          @apply text-3xl font-bold gradient-text mb-6;
        }
        .prose h2 {
          @apply text-2xl font-bold text-neon-blue mb-4 mt-8;
        }
        .prose h3 {
          @apply text-xl font-bold text-neon-green mb-3 mt-6;
        }
        .prose p {
          @apply text-gray-300 leading-relaxed mb-4;
        }
        .prose code {
          @apply bg-gray-800 text-neon-green px-2 py-1 rounded text-sm;
        }
        .prose pre {
          @apply bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto;
        }
        .prose blockquote {
          @apply border-l-4 border-neon-blue pl-4 italic text-gray-400;
        }
        .prose ul, .prose ol {
          @apply text-gray-300 mb-4;
        }
        .prose li {
          @apply mb-2;
        }
        .prose a {
          @apply text-neon-blue hover:text-neon-green transition-colors;
        }
        .prose img {
          @apply rounded-lg border border-gray-700 mx-auto my-8 max-w-full h-auto;
          box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
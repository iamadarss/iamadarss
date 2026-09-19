import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 max-w-4xl mx-auto px-6 sm:px-10 space-y-10">
      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-[#F4512A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-black/10 dark:border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3.5 py-1 rounded-full bg-[#F4512A] text-white font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-zinc-500">
            <Calendar className="w-3.5 h-3.5 text-[#F4512A]" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 text-zinc-500">
            <Clock className="w-3.5 h-3.5 text-[#F4512A]" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151515] dark:text-white leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4512A] flex items-center justify-center text-white font-black text-xs">
              AP
            </div>
            <div>
              <span className="text-xs font-bold text-[#151515] dark:text-white block">
                Adarsh Patel
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Software & Web Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Article Markdown/HTML Body */}
      <div className="prose dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <div className="whitespace-pre-line font-sans">{post.content}</div>
      </div>

      {/* Next Step Footer */}
      <footer className="pt-12 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-zinc-500">
          Published by Adarsh Patel • Free & Open Knowledge
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white transition-colors"
        >
          <span>More Articles</span>
        </Link>
      </footer>
    </article>
  );
}

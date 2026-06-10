import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { getSubscriptionStatus } from "@/lib/subscription";
import { type Article } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import SubscribeButton from "@/components/SubscribeButton";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (await getAllArticles()).map((a) => ({ slug: a.slug }));
}

// Dynamic: reads cookies() to check subscription — must live inside <Suspense>
async function ArticleContent({ article }: { article: Article }) {
  const isSubscribed = await getSubscriptionStatus();
  const isLocked = article.premium && !isSubscribed;

  if (isLocked) {
    return (
      <div className="relative">
        <div className="text-gray-700 leading-relaxed text-base space-y-4 line-clamp-[6] select-none blur-[3px] pointer-events-none">
          {article.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent">
          <div className="text-center pb-10 px-6">
            <div className="text-2xl mb-1">🔒</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              This article is for subscribers
            </h2>
            <p className="text-gray-500 text-sm mb-5 max-w-sm mx-auto">
              Subscribe for free to read all premium articles. No payment required.
            </p>
            <SubscribeButton isSubscribed={false} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-700 leading-relaxed text-base space-y-4">
      {article.content.split("\n\n").map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

function ArticleContentSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-100 rounded w-full" />
      ))}
    </div>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        ← Back to Home
      </Link>

      {/* Meta — static shell, prerendered */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          {article.category}
        </span>
        {article.premium && (
          <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full">
            PREMIUM
          </span>
        )}
        <span className="text-xs text-gray-400">{article.date}</span>
      </div>

      {/* Title — static shell */}
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      <p className="text-lg text-gray-500 mb-6 leading-relaxed">{article.excerpt}</p>

      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
          {article.author[0]}
        </div>
        <span className="text-sm font-medium text-gray-700">{article.author}</span>
      </div>

      {/* Cover image — static shell */}
      <div className="rounded-xl overflow-hidden mb-8 h-72 sm:h-96">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dynamic hole: subscription check streams in after static shell */}
      <Suspense fallback={<ArticleContentSkeleton />}>
        <ArticleContent article={article} />
      </Suspense>
    </article>
  );
}

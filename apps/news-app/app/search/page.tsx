import { searchArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

// Dynamic: awaits searchParams (request-specific) — must live inside <Suspense>
async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? "";
  const results = await searchArticles(query);

  return (
    <>
      <p className="text-sm text-gray-500 mb-8">
        {results.length} article{results.length !== 1 ? "s" : ""} found
      </p>

      {results.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium">
            No articles found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm mt-1">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  );
}

function SearchResultsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-48 bg-gray-100 rounded-xl" />
      ))}
    </div>
  );
}

export default function SearchPage({ searchParams }: Props) {
  return (
    <div>
      {/* Static shell — heading prerenders instantly */}
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          Browse All Articles
        </h1>
      </div>

      {/* Dynamic hole: searchParams + results stream in */}
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

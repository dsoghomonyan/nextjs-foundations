import { searchArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q ?? "";
  const results = searchArticles(query);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          {query ? `Results for "${query}"` : "Browse All Articles"}
        </h1>
        <p className="text-sm text-gray-500">
          {results.length} article{results.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium">No articles found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm mt-1">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

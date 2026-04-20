import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import Link from "next/link";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div>
      {/* Hero / Featured Article */}
      <Link href={`/articles/${featured.slug}`} className="group block mb-10">
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 h-80 sm:h-96">
          <img
            src={featured.imageUrl}
            alt={featured.title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-white bg-blue-600 px-2.5 py-1 rounded-full">
                {featured.category}
              </span>
              {featured.premium && (
                <span className="text-xs font-bold text-amber-900 bg-amber-400 px-2.5 py-1 rounded-full">
                  PREMIUM
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight max-w-2xl group-hover:text-blue-300 transition-colors">
              {featured.title}
            </h1>
            <p className="text-sm text-gray-300 mt-2 max-w-xl line-clamp-2">
              {featured.excerpt}
            </p>
            <div className="text-xs text-gray-400 mt-3">
              By {featured.author} · {featured.date}
            </div>
          </div>
        </div>
      </Link>

      {/* Section heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Latest Stories</h2>
        <Link href="/search" className="text-sm text-blue-600 hover:underline">
          Browse all →
        </Link>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

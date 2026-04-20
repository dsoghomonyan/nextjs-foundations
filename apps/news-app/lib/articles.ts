export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  premium: boolean;
  imageUrl: string;
};

const articles: Article[] = [
  {
    slug: "ai-revolution-2026",
    title: "The AI Revolution Reshaping Every Industry in 2026",
    excerpt: "Artificial intelligence is no longer a buzzword — it's the backbone of modern enterprise.",
    content: `Artificial intelligence has moved beyond the hype cycle and into the operational core of businesses worldwide. In 2026, companies that haven't integrated AI into their workflows are already falling behind.

From healthcare diagnostics to supply chain optimization, the technology is delivering measurable ROI. Early adopters report 30–40% efficiency gains in repetitive tasks alone.

The most significant shift isn't in the models themselves — it's in how organizations build teams around them. AI engineers, prompt architects, and model evaluators are among the fastest-growing job titles globally.

Regulation, however, remains fragmented. The EU's AI Act has set a global benchmark, but enforcement varies widely. Companies operating across borders face a patchwork of compliance requirements that's driving demand for AI governance specialists.

The next frontier is agentic AI — systems that don't just respond but plan, execute, and iterate autonomously. Early enterprise deployments show promise, though hallucination rates in long-horizon tasks remain a key challenge for engineering teams.`,
    author: "Sarah Chen",
    date: "2026-04-18",
    category: "Technology",
    premium: false,
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    slug: "global-markets-q2-2026",
    title: "Global Markets Enter Q2 With Cautious Optimism",
    excerpt: "After a turbulent Q1, investors are repositioning around resilient sectors and emerging markets.",
    content: `Equity markets closed Q1 2026 with mixed results, but institutional investors are entering the second quarter with measured confidence. The S&P 500 recovered its February losses, driven by strong earnings in the energy and semiconductor sectors.

Bond markets tell a different story. The Federal Reserve's decision to hold rates through mid-year has compressed yields, pushing capital toward equities and alternative assets. Real estate investment trusts (REITs) have been notable beneficiaries.

Emerging markets — particularly Southeast Asia and parts of Latin America — are drawing significant inflows. Vietnam's manufacturing sector continues to absorb supply chain shifts away from China, while Brazil's agri-tech boom is attracting venture and institutional capital alike.

Currency volatility remains the key wildcard. The dollar's relative strength has pressured dollar-denominated commodity prices, creating short-term headwinds for exporters in the developing world.

Analysts at Goldman and JPMorgan both flagged geopolitical risk as the top tail risk for Q2, particularly around trade policy and energy supply routes in the Middle East.`,
    author: "Marcus Webb",
    date: "2026-04-15",
    category: "Finance",
    premium: true,
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    slug: "climate-tech-funding-surge",
    title: "Climate Tech Funding Hits Record $180B in 2025",
    excerpt: "Venture capital poured unprecedented capital into clean energy and carbon capture last year.",
    content: `Climate technology attracted a record $180 billion in venture and growth capital during 2025, a 42% increase over the prior year. The surge reflects both regulatory tailwinds and rapidly declining costs in key technologies.

Battery storage led all sub-sectors, accounting for $34 billion of total investment. Advances in solid-state battery chemistry drove the influx, with several startups announcing pilot production lines capable of achieving energy densities previously confined to laboratory settings.

Direct air capture (DAC) also saw remarkable growth. The technology, which extracts CO2 directly from the atmosphere, crossed critical cost thresholds last year. Three DAC facilities now operating at commercial scale collectively remove over 1 million tons of CO2 annually — still a fraction of global emissions, but proof that scale is achievable.

Green hydrogen remains a contested bet. Electrolysis costs have fallen significantly, but distribution infrastructure lags. Most analysts see green hydrogen as a 2030+ commercial opportunity outside of industrial applications.

The investor profile is also shifting. Sovereign wealth funds from the Gulf, Norway, and Singapore now represent over 25% of climate tech LP capital — a dramatic rise from under 10% five years ago.`,
    author: "Priya Nair",
    date: "2026-04-12",
    category: "Climate",
    premium: false,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    slug: "longevity-medicine-mainstream",
    title: "Longevity Medicine Goes Mainstream as Clinics Expand Globally",
    excerpt: "What was once the domain of Silicon Valley billionaires is now accessible to the upper-middle class.",
    content: `Longevity clinics — once a niche offering for tech executives with seven-figure budgets — are proliferating rapidly across major cities. Franchises offering biological age testing, metabolic optimization, and preventive diagnostics have opened in over 400 locations globally in the past 18 months.

The core service model typically includes continuous glucose monitoring, advanced lipid panels, whole-body MRI, and personalized supplementation protocols. Annual membership prices range from $3,000 to $25,000, depending on depth of service and geographic market.

Pharmaceutical developments are accelerating the trend. GLP-1 receptor agonists, originally approved for diabetes and weight management, are being studied for their effects on aging biomarkers. Early data from multi-year trials is compelling enough that several major insurers in Europe have begun covering preventive metabolic panels.

The regulatory environment remains uneven. The FDA has not approved any drug specifically for aging — aging is not classified as a disease — which means longevity clinics operate largely in a grey zone, offering diagnostics and lifestyle interventions rather than treatments.

Critics argue the space is rife with pseudoscience and upselling. Supporters counter that even the conservative interventions — sleep optimization, strength training, cardiovascular health — are well-evidenced and underserved by traditional medicine.`,
    author: "Dr. James Okello",
    date: "2026-04-10",
    category: "Health",
    premium: true,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    slug: "next-generation-space-economy",
    title: "The Space Economy Crosses $1 Trillion for the First Time",
    excerpt: "Commercial space activity has hit a historic milestone, driven by satellite services and lunar contracts.",
    content: `The global space economy surpassed $1 trillion in annual revenue for the first time in 2025, according to a new report from the Space Foundation. The milestone marks a decade-long transformation from a government-dominated industry to a commercially driven one.

Satellite services — including broadband, Earth observation, and positioning — account for the largest share at roughly $650 billion. Low Earth orbit (LEO) broadband constellations from SpaceX, Amazon, and several Chinese state-backed operators have collectively connected over 100 million new users in underserved regions.

Launch costs, which plummeted with reusable rocket technology, continue to fall. The cost per kilogram to LEO has dropped from roughly $10,000 a decade ago to under $500 for the most efficient providers. This has enabled an explosion in small satellite deployments across commercial and defense applications.

The lunar economy is emerging as the next major frontier. NASA's Artemis program has catalyzed a wave of commercial contracts for lunar surface operations, resource extraction, and eventually habitat construction. Several companies are in advanced development of lunar landers, rovers, and in-situ resource utilization (ISRU) systems targeting water ice extraction at the lunar south pole.

Defense spending in space has also grown sharply. The establishment of dedicated space forces in the US, China, France, and several other nations has driven procurement of satellite hardening, space domain awareness, and counter-space capabilities.`,
    author: "Elena Vasquez",
    date: "2026-04-08",
    category: "Science",
    premium: true,
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
  },
  {
    slug: "urban-planning-15-minute-cities",
    title: "15-Minute Cities Are Reshaping Urban Planning Globally",
    excerpt: "The concept of proximity-based urban design is moving from theory to policy in dozens of major cities.",
    content: `The 15-minute city — the idea that residents should be able to access work, education, healthcare, and leisure within a 15-minute walk or bike ride — has moved from urban planning theory to active municipal policy in over 50 cities worldwide.

Paris, the concept's most prominent early adopter, has completed three years of data collection since implementing its "Paris en Commun" initiative. Results show a 12% reduction in car trips within arrondissements where bike lane infrastructure was most aggressively expanded, alongside a 7% increase in local retail revenue.

The model is being adapted across different urban contexts. In car-dependent US cities like Houston and Phoenix, planners are focusing on mixed-use zoning and transit-oriented development rather than full pedestrianization — a pragmatic middle ground that acknowledges existing infrastructure constraints.

Critics of the model raise valid concerns. Property values in desirable walkable zones have surged, accelerating gentrification in cities that fail to pair the initiative with affordable housing policy. Melbourne and Amsterdam have both introduced density bonuses for affordable units in 15-minute zones to address this dynamic.

Technology is playing a supporting role. Real-time mobility data from transit apps and smart city sensors is helping planners identify gaps in pedestrian and cycling networks with a precision that was impossible a decade ago. AI-assisted urban modeling tools can now simulate the impact of infrastructure changes before a single shovel enters the ground.`,
    author: "Tobias Müller",
    date: "2026-04-05",
    category: "Society",
    premium: false,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase().trim();
  if (!q) return articles;
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q)
  );
}

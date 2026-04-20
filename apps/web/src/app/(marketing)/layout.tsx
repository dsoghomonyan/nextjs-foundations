export default function MarketingLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
                <nav style={{ display: "flex", gap: 12 }}>
                    <a href="/apps/web/public">Home</a>
                    <a href="/about">About</a>
                </nav>
            </header>

            <main style={{ padding: 20 }}>{children}</main>
        </div>
    )
}

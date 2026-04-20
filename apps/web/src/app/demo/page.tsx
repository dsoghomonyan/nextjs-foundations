import { Counter } from "@/components/counter"

async function getServerTime() {
    return new Date().toISOString()
}

export default async function DemoPage() {
    const time = await getServerTime()

    return (
        <main className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Server vs Client Demo</h1>

            <div className="rounded border p-4">
                <h2 className="font-semibold">Server Component</h2>
                <p>Server time: {time}</p>
            </div>

            <Counter />
        </main>
    )
}

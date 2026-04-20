"use client"

import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="rounded border p-4">
            <h2 className="font-semibold">Client Component</h2>

            <button
                onClick={() => setCount(count + 1)}
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
            >
                Clicked {count} times
            </button>
        </div>
    )
}

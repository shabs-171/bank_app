// app/unauthorized/page.tsx (Next.js 13+ App Router)
// অথবা pages/unauthorized.tsx (Next.js 12/13 Pages Router)

"use client";

import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="flex items-center justify-center  my-32">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                    Unauthorized Access
                </h1>
                <p className="text-gray-700 mb-6">
                    You do not have permission to view this page. <br />
                    GO TO HOME
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

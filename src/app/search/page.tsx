import { Navbar } from "@/components/layout/navbar";
import { Suspense } from "react";
import { SearchResults } from "@/components/search/search-results";

export default function SearchPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Suspense fallback={
                        <div className="text-center py-20">
                            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                    }>
                        <SearchResults />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}

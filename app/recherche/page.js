import SearchResults from "@/components/SearchResults";

export const metadata = {
  title: "Recherche",
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <SearchResults initialQuery={query} />
    </div>
  );
}

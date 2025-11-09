import SearchHero from '@/components/search/search-hero';
import SearchFilters from '@/components/search/search-filters';

export default function SearchPage() {
  return (
    <div className="space-y-10">
      <SearchHero />
      <SearchFilters />
    </div>
  );
}

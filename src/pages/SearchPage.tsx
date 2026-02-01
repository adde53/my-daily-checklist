import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ChecklistCard from '@/components/ChecklistCard';
import { searchChecklists } from '@/data/checklists';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchChecklists(query) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="container-page py-8 md:py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Link>

        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Sökresultat
          </h1>
          <SearchBar placeholder="Sök igen..." />
        </div>

        {query && (
          <p className="text-muted-foreground mb-6">
            {results.length} resultat för "{query}"
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {results.map((checklist, index) => (
              <div key={checklist.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ChecklistCard checklist={checklist} />
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Inga resultat hittades
            </h2>
            <p className="text-muted-foreground mb-6">
              Prova att söka på något annat eller utforska våra kategorier.
            </p>
            <Link 
              to="/kategorier" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Se alla kategorier
            </Link>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Skriv något i sökfältet för att hitta checklistor.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;

import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ChecklistCard from '@/components/ChecklistCard';
import { categories, checklists } from '@/data/checklists';

const Index = () => {
  // Get featured checklists (one from each category for variety)
  const featuredChecklists = categories.slice(0, 4).map(cat => 
    checklists.find(c => c.category === cat.id)
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Gratis checklistor för alla tillfällen
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Checklistor som gör{' '}
              <span className="text-primary">vardagen enklare</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Hitta färdiga checklistor för flytt, ekonomi, resor och mer. 
              Bocka av direkt, skriv ut eller kopiera – helt gratis.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              <SearchBar size="large" placeholder="Sök bland alla checklistor..." />
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>{checklists.length}+ checklistor</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>{categories.length} kategorier</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>100% gratis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Utforska kategorier
            </h2>
            <p className="text-muted-foreground">
              Välj en kategori för att hitta rätt checklista
            </p>
          </div>
          <Link 
            to="/kategorier" 
            className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium"
          >
            Visa alla <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Checklists */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Populära checklistor
            </h2>
            <p className="text-muted-foreground">
              Våra mest använda checklistor
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredChecklists.map((checklist, index) => (
            checklist && (
              <div key={checklist.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ChecklistCard checklist={checklist} />
              </div>
            )
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-page py-16">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Börja organisera din vardag idag
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Våra checklistor hjälper dig att hålla koll på allt från flytt till deklaration. 
              Välj en kategori och kom igång direkt.
            </p>
            <Link
              to="/kategorier"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Utforska alla kategorier
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

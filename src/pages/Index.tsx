import { ArrowRight, CheckCircle2, ListChecks, Printer, Share2 } from 'lucide-react';
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
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.03] to-transparent">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container-page relative py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-6 leading-[1.1] animate-fade-in">
                Få ordning på{' '}
                <span className="relative">
                  <span className="relative z-10 text-primary">tillvaron</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-0 rounded-sm" />
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Färdiga checklistor för flytt, ekonomi, resor och allt däremellan. 
                Bocka av på sajten, skriv ut eller kopiera – helt gratis.
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <SearchBar size="large" placeholder="Vad behöver du hjälp med?" />
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ListChecks className="w-4 h-4 text-primary" />
                  </div>
                  <span>Bocka av online</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Printer className="w-4 h-4 text-primary" />
                  </div>
                  <span>Skriv ut</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-primary" />
                  </div>
                  <span>Dela enkelt</span>
                </div>
              </div>
            </div>
            
            {/* Right: Visual */}
            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                {/* Main card */}
                <div className="bg-card rounded-2xl border border-border shadow-lg p-6 transform rotate-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Flytt – Checklista</h3>
                      <p className="text-xs text-muted-foreground">12 punkter · 2-3 veckor</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Säg upp hyreskontrakt', 'Adressändring hos Skatteverket', 'Flytta försäkringar'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${i < 2 ? 'bg-success border-success' : 'border-border'}`}>
                          {i < 2 && <CheckCircle2 className="w-3 h-3 text-success-foreground" />}
                        </div>
                        <span className={i < 2 ? 'line-through text-muted-foreground' : 'text-foreground'}>{item}</span>
                      </div>
                    ))}
                    <div className="text-xs text-muted-foreground pt-2">+ 9 fler punkter...</div>
                  </div>
                </div>
                
                {/* Floating card 1 */}
                <div className="absolute -top-4 -right-4 bg-card rounded-xl border border-border shadow-md p-3 transform -rotate-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-xs">✈️</span>
                    </div>
                    <span className="font-medium text-foreground">Packlista semester</span>
                  </div>
                </div>
                
                {/* Floating card 2 */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl border border-border shadow-md p-3 transform rotate-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-lg bg-success/20 flex items-center justify-center">
                      <span className="text-xs">💰</span>
                    </div>
                    <span className="font-medium text-foreground">Budget – Månad</span>
                  </div>
                </div>
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

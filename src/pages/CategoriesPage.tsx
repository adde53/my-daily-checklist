import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/checklists';

const CategoriesPage = () => {
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

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Alla kategorier
          </h1>
          <p className="text-muted-foreground text-lg">
            Välj en kategori för att utforska checklistor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoriesPage;

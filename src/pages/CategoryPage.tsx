import { useParams, Link } from 'react-router-dom';
import { Home, Wallet, Briefcase, Heart, Plane, FileText, ArrowLeft, LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChecklistCard from '@/components/ChecklistCard';
import { getCategoryInfo, getChecklistsByCategory, Category } from '@/data/checklists';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wallet,
  Briefcase,
  Heart,
  Plane,
  FileText,
};

const categoryBgClasses: Record<Category, string> = {
  flytt: 'bg-category-flytt',
  ekonomi: 'bg-category-ekonomi',
  jobb: 'bg-category-jobb',
  halsa: 'bg-category-halsa',
  resor: 'bg-category-resor',
  admin: 'bg-category-admin',
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryInfo(categoryId as Category);
  const checklists = getChecklistsByCategory(categoryId as Category);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kategori hittades inte</h1>
          <Link to="/" className="text-primary hover:underline">
            Tillbaka till startsidan
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[category.icon] || FileText;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${categoryBgClasses[category.id]} opacity-5`} />
        
        <div className="container-page relative py-12 md:py-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka
          </Link>
          
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-xl ${categoryBgClasses[category.id]} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {category.description}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {checklists.length} checklistor tillgängliga
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="container-page py-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checklists.map((checklist, index) => (
            <div key={checklist.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ChecklistCard checklist={checklist} />
            </div>
          ))}
        </div>
        
        {checklists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Inga checklistor hittades i denna kategori.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;

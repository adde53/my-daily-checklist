import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChecklistInteractive from '@/components/ChecklistInteractive';
import { getChecklistById, getCategoryInfo, Category } from '@/data/checklists';

const categoryNames: Record<Category, string> = {
  flytt: 'Flytt & Boende',
  ekonomi: 'Ekonomi',
  jobb: 'Jobb & Utbildning',
  halsa: 'Hälsa & Vardag',
  resor: 'Resor & Semester',
  admin: 'Administration',
};

const categoryColorClasses: Record<Category, string> = {
  flytt: 'bg-category-flytt/10 text-category-flytt',
  ekonomi: 'bg-category-ekonomi/10 text-category-ekonomi',
  jobb: 'bg-category-jobb/10 text-category-jobb',
  halsa: 'bg-category-halsa/10 text-category-halsa',
  resor: 'bg-category-resor/10 text-category-resor',
  admin: 'bg-category-admin/10 text-category-admin',
};

const ChecklistPage = () => {
  const { checklistId } = useParams<{ checklistId: string }>();
  const checklist = getChecklistById(checklistId || '');

  if (!checklist) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Checklistan hittades inte</h1>
          <Link to="/" className="text-primary hover:underline">
            Tillbaka till startsidan
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="container-page py-8 md:py-12">
        <Link 
          to={`/kategori/${checklist.category}`} 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors no-print"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till {categoryNames[checklist.category]}
        </Link>
        
        {/* Print header - only visible when printing */}
        <div className="hidden print:block checklist-print-header">
          <h1>{checklist.title}</h1>
          <p>{checklist.description}</p>
        </div>
        
        {/* Screen header */}
        <div className="max-w-2xl print:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link 
              to={`/kategori/${checklist.category}`}
              className={`category-badge ${categoryColorClasses[checklist.category]}`}
            >
              <Tag className="w-3 h-3 mr-1" />
              {categoryNames[checklist.category]}
            </Link>
            {checklist.estimatedTime && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {checklist.estimatedTime}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {checklist.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {checklist.description}
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="container-page pb-16">
        <div className="max-w-2xl">
          <ChecklistInteractive checklist={checklist} />
          
          {/* Print footer */}
          <div className="hidden print:block print-footer">
            Checklista från Checklistor.se · {new Date().toLocaleDateString('sv-SE')}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChecklistPage;

import { Home, Wallet, Briefcase, Heart, Plane, FileText, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategoryInfo, Category } from '@/data/checklists';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wallet,
  Briefcase,
  Heart,
  Plane,
  FileText,
};

const categoryColorClasses: Record<Category, string> = {
  flytt: 'bg-category-flytt/10 text-category-flytt border-category-flytt/20',
  ekonomi: 'bg-category-ekonomi/10 text-category-ekonomi border-category-ekonomi/20',
  jobb: 'bg-category-jobb/10 text-category-jobb border-category-jobb/20',
  halsa: 'bg-category-halsa/10 text-category-halsa border-category-halsa/20',
  resor: 'bg-category-resor/10 text-category-resor border-category-resor/20',
  admin: 'bg-category-admin/10 text-category-admin border-category-admin/20',
};

const categoryIconBgClasses: Record<Category, string> = {
  flytt: 'bg-category-flytt',
  ekonomi: 'bg-category-ekonomi',
  jobb: 'bg-category-jobb',
  halsa: 'bg-category-halsa',
  resor: 'bg-category-resor',
  admin: 'bg-category-admin',
};

interface CategoryCardProps {
  category: CategoryInfo;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || FileText;

  return (
    <Link
      to={`/kategori/${category.id}`}
      className="card-interactive p-6 flex flex-col items-start gap-4 group"
    >
      <div className={`w-12 h-12 rounded-xl ${categoryIconBgClasses[category.id]} flex items-center justify-center transition-transform group-hover:scale-110`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm">{category.description}</p>
      </div>
      <span className={`category-badge border ${categoryColorClasses[category.id]} text-xs`}>
        {category.count} checklistor
      </span>
    </Link>
  );
};

export default CategoryCard;

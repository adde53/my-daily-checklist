import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Checklist, Category } from '@/data/checklists';

const categoryColorClasses: Record<Category, string> = {
  flytt: 'bg-category-flytt/10 text-category-flytt',
  ekonomi: 'bg-category-ekonomi/10 text-category-ekonomi',
  jobb: 'bg-category-jobb/10 text-category-jobb',
  halsa: 'bg-category-halsa/10 text-category-halsa',
  resor: 'bg-category-resor/10 text-category-resor',
  admin: 'bg-category-admin/10 text-category-admin',
};

const categoryNames: Record<Category, string> = {
  flytt: 'Flytt',
  ekonomi: 'Ekonomi',
  jobb: 'Jobb',
  halsa: 'Hälsa',
  resor: 'Resor',
  admin: 'Admin',
};

interface ChecklistCardProps {
  checklist: Checklist;
}

const ChecklistCard = ({ checklist }: ChecklistCardProps) => {
  return (
    <Link
      to={`/checklista/${checklist.id}`}
      className="card-interactive p-5 flex items-center gap-4 group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className={`category-badge text-xs ${categoryColorClasses[checklist.category]}`}>
            {categoryNames[checklist.category]}
          </span>
          {checklist.estimatedTime && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {checklist.estimatedTime}
            </span>
          )}
        </div>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {checklist.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {checklist.description}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          {checklist.items.length} punkter
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
    </Link>
  );
};

export default ChecklistCard;

import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  size?: 'default' | 'large';
}

const SearchBar = ({ className = '', placeholder = 'Sök checklistor...', size = 'default' }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/sok?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const sizeClasses = {
    default: 'py-3 px-4 text-base',
    large: 'py-4 px-5 text-lg',
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${size === 'large' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-card border border-border rounded-xl ${sizeClasses[size]} pl-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-card`}
      />
    </form>
  );
};

export default SearchBar;

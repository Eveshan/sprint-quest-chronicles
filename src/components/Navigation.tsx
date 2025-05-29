
import { Button } from '@/components/ui/button';
import { FilterType } from '@/pages/Index';

interface NavigationProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const Navigation = ({ activeFilter, onFilterChange }: NavigationProps) => {
  const filters = [
    { key: 'all' as FilterType, label: '🧪 All Systems', icon: '🌍' },
    { key: 'boss' as FilterType, label: '🔥 Boss Fights', icon: '🐉' },
    { key: 'quest' as FilterType, label: '🧭 Quests Only', icon: '📜' },
    { key: 'bugs' as FilterType, label: '🐞 Bug Graveyard', icon: '🪦' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-fantasy-dark/90 backdrop-blur-sm border-b border-fantasy-gold/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`
                transition-all duration-300 font-semibold
                ${activeFilter === filter.key 
                  ? 'bg-fantasy-gold text-fantasy-dark border-fantasy-gold shadow-lg shadow-fantasy-gold/50' 
                  : 'border-fantasy-gold/50 text-fantasy-gold hover:border-fantasy-gold hover:bg-fantasy-gold/20'
                }
              `}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

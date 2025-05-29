
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface FloatingCompassProps {
  onRegionSelect: (region: string | null) => void;
}

const regions = [
  { id: 'halo', name: '🏔️', title: 'Comcorp Mountains' },
  { id: 'cdpe', name: '🌾', title: 'CDPE Fields' },
  { id: 'salesforce', name: '🪄', title: 'Salesforce Swamps' },
  { id: 'docforge', name: '🏚️', title: 'Docforge Ruins' },
  { id: 'knowledge', name: '🧠', title: 'Knowledge Crater' },
  { id: 'clienthold', name: '🛡', title: 'Clienthold Keep' },
  { id: 'buglands', name: '🐞', title: 'Buglands Graveyard' },
];

export const FloatingCompass = ({ onRegionSelect }: FloatingCompassProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card 
        className={`
          bg-fantasy-dark/90 border-fantasy-gold/50 p-3 transition-all duration-300
          ${isExpanded ? 'w-64' : 'w-16'}
        `}
      >
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-2 w-10 h-10 rounded-full bg-fantasy-gold text-fantasy-dark hover:bg-fantasy-amber"
          >
            🧭
          </Button>
          
          {isExpanded && (
            <div className="w-full space-y-2 animate-fade-in">
              <div className="text-center text-fantasy-gold text-xs font-semibold mb-2">
                Quick Travel
              </div>
              
              {regions.map((region) => (
                <Button
                  key={region.id}
                  onClick={() => {
                    onRegionSelect(region.id);
                    setIsExpanded(false);
                  }}
                  variant="outline"
                  className="w-full text-left justify-start border-fantasy-gold/30 text-fantasy-gold hover:bg-fantasy-gold/20 text-xs p-2"
                >
                  <span className="mr-2">{region.name}</span>
                  <span className="truncate">{region.title}</span>
                </Button>
              ))}
              
              <Button
                onClick={() => {
                  onRegionSelect(null);
                  setIsExpanded(false);
                }}
                variant="outline"
                className="w-full border-fantasy-gold/30 text-fantasy-gold hover:bg-fantasy-gold/20 text-xs p-2"
              >
                🌍 View All
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

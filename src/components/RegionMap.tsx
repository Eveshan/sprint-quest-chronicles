
import { Card } from '@/components/ui/card';

interface RegionMapProps {
  onRegionSelect: (region: string | null) => void;
  selectedRegion: string | null;
}

const regions = [
  { id: 'halo', name: '🏔️ Comcorp Mountains', system: 'HALO', position: 'top-4 left-1/4' },
  { id: 'cdpe', name: '🌾 CDPE Fields', system: 'Further Lending', position: 'top-1/4 right-1/4' },
  { id: 'salesforce', name: '🪄 Salesforce Swamps', system: 'SFI, Automation, Test Harness', position: 'top-1/2 left-8' },
  { id: 'docforge', name: '🏚️ Docforge Ruins', system: 'Doc Gen, Storage, Aspose Templates', position: 'top-1/2 right-8' },
  { id: 'knowledge', name: '🧠 Knowledge Crater', system: 'Rate Reconfig, Datastor Categoriser', position: 'bottom-1/4 left-1/3' },
  { id: 'clienthold', name: '🛡 Clienthold Keep', system: 'Client Servicing', position: 'bottom-1/4 right-1/3' },
  { id: 'buglands', name: '🐞 Buglands Graveyard', system: 'Obituary Section', position: 'bottom-4 left-1/2 transform -translate-x-1/2' },
];

export const RegionMap = ({ onRegionSelect, selectedRegion }: RegionMapProps) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-fantasy-gold mb-6 text-glow font-medieval">
        🗺️ Realm of Development
      </h2>
      
      <Card className="relative h-96 bg-gradient-to-br from-fantasy-purple/20 to-fantasy-dark/40 border-fantasy-gold/50 border-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-purple-900/30 to-slate-900/40"></div>
        
        {/* Decorative map elements */}
        <div className="absolute top-4 left-4 text-fantasy-gold text-2xl animate-pulse">⭐</div>
        <div className="absolute top-8 right-6 text-fantasy-silver text-xl animate-pulse delay-500">✨</div>
        <div className="absolute bottom-6 left-8 text-fantasy-amber text-lg animate-pulse delay-1000">🌟</div>
        
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onRegionSelect(selectedRegion === region.id ? null : region.id)}
            className={`
              absolute ${region.position} p-3 rounded-lg border-2 transition-all duration-300
              ${selectedRegion === region.id
                ? 'bg-fantasy-gold text-fantasy-dark border-fantasy-gold scale-110 shadow-lg shadow-fantasy-gold/50'
                : 'bg-fantasy-dark/70 text-fantasy-gold border-fantasy-gold/50 hover:border-fantasy-gold hover:scale-105 hover:bg-fantasy-gold/20'
              }
              card-hover transform group
            `}
          >
            <div className="text-lg font-semibold whitespace-nowrap">{region.name}</div>
            <div className="text-xs opacity-80 group-hover:opacity-100">{region.system}</div>
          </button>
        ))}
        
        {/* Map legend */}
        <div className="absolute bottom-4 right-4 bg-fantasy-dark/80 p-3 rounded-lg border border-fantasy-gold/30">
          <div className="text-fantasy-gold text-sm font-semibold mb-1">🧭 Map Legend</div>
          <div className="text-fantasy-silver text-xs">Click regions to filter quests</div>
        </div>
      </Card>
    </div>
  );
};

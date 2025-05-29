
import { Card } from '@/components/ui/card';

interface RegionMapProps {
  onRegionSelect: (region: string | null) => void;
  selectedRegion: string | null;
}

const regions = [
  { id: 'halo', name: '🏔️ Halo Mountains', system: 'Halo Support, Build Issues', position: 'top-4 left-1/4' },
  { id: 'cdpe', name: '🌾 CDPE Fields', system: 'Further Lending, MO Valuation', position: 'top-1/4 right-1/4' },
  { id: 'salesforce', name: '🪄 Salesforce Swamps', system: 'SFI, Test Harness, Automation', position: 'top-1/2 left-8' },
  { id: 'docforge', name: '🏚️ Document Ruins', system: 'Doc Gen, Storage, Templates', position: 'top-1/2 right-8' },
  { id: 'knowledge', name: '🧠 Knowledge Crater', system: 'Rate Config, Investigation', position: 'bottom-1/4 left-1/3' },
  { id: 'clienthold', name: '🛡 Clienthold Keep', system: 'Client Servicing', position: 'bottom-1/4 right-1/3' },
];

export const RegionMap = ({ onRegionSelect, selectedRegion }: RegionMapProps) => {
  const handleRegionClick = (regionId: string) => {
    console.log('Region clicked:', regionId, 'Current selected:', selectedRegion);
    onRegionSelect(selectedRegion === regionId ? null : regionId);
  };

  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-fantasy-gold mb-6 text-glow font-medieval">
        🗺️ Realm of Development
      </h2>
      
      <Card className="relative h-96 bg-gradient-to-br from-fantasy-purple/20 to-fantasy-dark/40 border-fantasy-gold/50 border-glow overflow-hidden">
        {/* Enhanced map background with better visual definition */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-purple-900/40 to-slate-900/50"></div>
        
        {/* Additional map texture layers */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-fantasy-gold/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-800/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-800/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-20 bg-slate-800/30 rounded-full blur-2xl"></div>
        </div>
        
        {/* Map terrain elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-12 text-6xl opacity-30">⛰️</div>
          <div className="absolute top-16 right-16 text-4xl opacity-25">🌲</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-20">🏰</div>
          <div className="absolute bottom-12 right-12 text-3xl opacity-30">🌊</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-15">🗻</div>
        </div>
        
        {/* Decorative animated elements */}
        <div className="absolute top-4 left-4 text-fantasy-gold text-2xl animate-pulse">⭐</div>
        <div className="absolute top-8 right-6 text-fantasy-silver text-xl animate-pulse delay-500">✨</div>
        <div className="absolute bottom-6 left-8 text-fantasy-amber text-lg animate-pulse delay-1000">🌟</div>
        
        {/* Region buttons */}
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => handleRegionClick(region.id)}
            className={`
              absolute ${region.position} p-3 rounded-lg border-2 transition-all duration-300 z-10
              ${selectedRegion === region.id
                ? 'bg-fantasy-gold text-fantasy-dark border-fantasy-gold scale-110 shadow-lg shadow-fantasy-gold/50'
                : 'bg-fantasy-dark/80 text-fantasy-gold border-fantasy-gold/60 hover:border-fantasy-gold hover:scale-105 hover:bg-fantasy-gold/20'
              }
              card-hover transform group cursor-pointer
            `}
          >
            <div className="text-lg font-semibold whitespace-nowrap">{region.name}</div>
            <div className="text-xs opacity-80 group-hover:opacity-100">{region.system}</div>
          </button>
        ))}
        
        {/* Map legend */}
        <div className="absolute bottom-4 right-4 bg-fantasy-dark/90 p-3 rounded-lg border border-fantasy-gold/40 z-10">
          <div className="text-fantasy-gold text-sm font-semibold mb-1">🧭 Map Legend</div>
          <div className="text-fantasy-silver text-xs">Click regions to filter quests</div>
        </div>
      </Card>
    </div>
  );
};

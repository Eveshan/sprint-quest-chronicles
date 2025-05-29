
import { useState, useEffect } from 'react';
import { RegionMap } from '@/components/RegionMap';
import { PartyRoster } from '@/components/PartyRoster';
import { QuestBoard } from '@/components/QuestBoard';
import { BugGraveyard } from '@/components/BugGraveyard';
import { Navigation } from '@/components/Navigation';
import { FloatingCompass } from '@/components/FloatingCompass';

export type FilterType = 'all' | 'boss' | 'quest' | 'bugs';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Sprint Quest Chronicles - Team Dynamo';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fantasy-dark via-fantasy-purple to-fantasy-dark relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-fantasy-gold rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-fantasy-silver rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-fantasy-amber rounded-full animate-pulse delay-2000"></div>
      </div>

      <Navigation activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-6xl font-bold text-fantasy-gold mb-4 animate-glow font-medieval">
            ⚔️ Sprint Quest Chronicles ⚔️
          </h1>
          <p className="text-2xl text-fantasy-silver mb-2">
            The Epic Adventures of <span className="text-fantasy-gold font-semibold">Clan Dynamo</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-fantasy-amber">
            <span className="text-lg">🗓️ Sprint Review</span>
            <span className="text-lg">⭐ Level Complete</span>
          </div>
        </header>

        {/* Region Map */}
        {(activeFilter === 'all') && (
          <section className="mb-12">
            <RegionMap onRegionSelect={setSelectedRegion} selectedRegion={selectedRegion} />
          </section>
        )}

        {/* Party Roster */}
        {(activeFilter === 'all') && (
          <section className="mb-12">
            <PartyRoster />
          </section>
        )}

        {/* Quest Board */}
        {(activeFilter === 'all' || activeFilter === 'boss' || activeFilter === 'quest') && (
          <section className="mb-12">
            <QuestBoard filter={activeFilter} selectedRegion={selectedRegion} />
          </section>
        )}

        {/* Bug Graveyard */}
        {(activeFilter === 'all' || activeFilter === 'bugs') && (
          <section className="mb-12">
            <BugGraveyard />
          </section>
        )}
      </main>

      <FloatingCompass onRegionSelect={setSelectedRegion} />
    </div>
  );
};

export default Index;

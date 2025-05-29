
import { Card } from '@/components/ui/card';

const fallenBugs = [
  {
    name: 'The Vanishing Premium',
    age: 19,
    epitaph: 'Laid to rest after stubborn resistance. Peace at last.',
    icon: '👻'
  },
  {
    name: 'Permissions Phantom',
    age: 7,
    epitaph: 'No longer haunts DevPro1, exorcised by Sershin & Keshlin.',
    icon: '🔒'
  },
  {
    name: 'Multiapp Glitchspawn',
    age: 12,
    epitaph: 'Was spotted in the wild — harness detected and reported it.',
    icon: '⚡'
  },
  {
    name: 'Form Field Fury',
    age: 5,
    epitaph: 'Refused to format numbers — finally tamed by Kasu.',
    icon: '📝'
  },
];

export const BugGraveyard = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-fantasy-gold mb-6 text-glow font-medieval">
        🪦 Obituary: Farewell to Fallen Bugs
      </h2>
      
      <div className="bg-gradient-to-b from-purple-900/20 to-gray-900/40 p-8 rounded-lg border border-fantasy-gold/30 border-glow">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {fallenBugs.map((bug, index) => (
            <Card 
              key={index}
              className="p-6 bg-fantasy-dark/80 border-gray-600 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Tombstone shape */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-16 h-6 bg-gray-700 rounded-t-full border-2 border-gray-600"></div>
              
              <div className="text-center pt-4">
                <div className="text-4xl mb-3 opacity-60">{bug.icon}</div>
                
                <h3 className="text-lg font-bold text-gray-300 mb-2">
                  {bug.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  Age: {bug.age} days
                </p>
                
                <p className="text-gray-500 text-xs italic leading-relaxed">
                  "{bug.epitaph}"
                </p>
                
                <div className="mt-4 text-gray-600 text-xs">
                  R.I.P. 🕊️
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-fantasy-silver text-center">
          <p className="text-lg font-semibold mb-2">🌹 In Memoriam 🌹</p>
          <p className="text-sm opacity-80">
            These bugs served their time in our codebase. May they rest in peace and never return.
          </p>
        </div>
      </div>
    </div>
  );
};

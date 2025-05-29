
import { Card } from '@/components/ui/card';

const partyMembers = [
  { name: 'Sershin', class: 'Test Sorcerer', icon: '🧙‍♂️', color: 'from-purple-500 to-blue-500' },
  { name: 'Sarah', class: 'Debugging Ranger', icon: '🏹', color: 'from-green-500 to-emerald-500' },
  { name: 'Keshlin', class: 'UI Alchemist', icon: '⚗️', color: 'from-yellow-500 to-orange-500' },
  { name: 'Eveshan', class: 'Lending Monk', icon: '🥋', color: 'from-orange-500 to-red-500' },
  { name: 'Qiniso', class: 'Scrollkeeper', icon: '📜', color: 'from-amber-500 to-yellow-500' },
  { name: 'Kasu', class: 'Encryptor Mage', icon: '🔮', color: 'from-indigo-500 to-purple-500' },
  { name: 'Dillip', class: 'Apex Paladin', icon: '🛡️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Kieran', class: 'Rate Sniper', icon: '🎯', color: 'from-red-500 to-pink-500' },
  { name: 'Nashvin', class: 'CI/CD Druid', icon: '🌿', color: 'from-lime-500 to-green-500' },
  { name: 'Sharath', class: 'HALO Dragonmaster', icon: '🐉', color: 'from-red-600 to-orange-600' },
];

export const PartyRoster = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-fantasy-gold mb-6 text-glow font-medieval">
        🛡️ Clan Dynamo: Party Roster
      </h2>
      
      <div className="flex overflow-x-auto gap-4 pb-4 fantasy-scroll">
        {partyMembers.map((member, index) => (
          <Card 
            key={member.name}
            className={`
              flex-shrink-0 w-48 p-4 bg-gradient-to-br ${member.color} 
              border-2 border-fantasy-gold/50 card-hover cursor-pointer
              transform transition-all duration-300 hover:scale-105
              animate-float
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-center">
              <div className="text-5xl mb-3 animate-pulse">{member.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1 text-glow">{member.name}</h3>
              <p className="text-sm text-white/90 font-semibold">{member.class}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};


import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { XPBar } from '@/components/XPBar';
import { FilterType } from '@/pages/Index';

interface QuestBoardProps {
  filter: FilterType;
  selectedRegion: string | null;
}

const quests = [
  {
    title: 'Document Gen & Letters Testing',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Illustrative Premiums Manual Testing',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Add Accident-Only to Test Harness',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'Test Harness',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Roles & Permissions Bug Hunt',
    type: 'Boss',
    members: ['Sershin', 'Keshlin'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'SFI Comprehensive Calculator',
    type: 'Quest',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'Test Harness',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'UAT Multi-Applicant Framework',
    type: 'Quest',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'Automation',
    xp: 80,
    maxXp: 100
  },
  {
    title: 'Datastor Categoriser Investigation Setup',
    type: 'Quest',
    members: ['Sershin'],
    region: 'knowledge',
    regionName: 'Knowledge Crater',
    xp: 40,
    maxXp: 100
  },
  {
    title: 'MP-1938: Doc Storage Handover',
    type: 'Boss',
    members: ['Kasu', 'Keshlin'],
    region: 'docforge',
    regionName: 'Docforge Ruins',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'POD Eligibility Fix (MP-2289)',
    type: 'Quest',
    members: ['Keshlin'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Rate Reconfig Final Analysis',
    type: 'Quest',
    members: ['Kieran'],
    region: 'knowledge',
    regionName: 'Knowledge Crater',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Local Build Issues Resolved',
    type: 'Quest',
    members: ['Kieran'],
    region: 'halo',
    regionName: 'Comcorp Mountains',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Aspose Template Set (5 done)',
    type: 'Boss',
    members: ['Kasu'],
    region: 'docforge',
    regionName: 'Docforge Ruins',
    xp: 90,
    maxXp: 100
  },
  {
    title: 'HAL Policy Template',
    type: 'Quest',
    members: ['Kasu'],
    region: 'docforge',
    regionName: 'Docforge Ruins',
    xp: 50,
    maxXp: 100
  },
  {
    title: 'HaloV2.100 Logging & ITC Fix',
    type: 'Boss',
    members: ['Qiniso'],
    region: 'halo',
    regionName: 'Comcorp Mountains',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'Client Servicing Test Scenarios',
    type: 'Quest',
    members: ['Qiniso'],
    region: 'clienthold',
    regionName: 'Clienthold Keep',
    xp: 70,
    maxXp: 100
  },
  {
    title: 'MP-2208: Scheduled Apex Job',
    type: 'Boss',
    members: ['Dillip'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 100,
    maxXp: 100
  },
  {
    title: 'CDPE + MO Dev (9 tickets)',
    type: 'Boss',
    members: ['Eveshan'],
    region: 'cdpe',
    regionName: 'CDPE Fields',
    xp: 90,
    maxXp: 100
  },
];

export const QuestBoard = ({ filter, selectedRegion }: QuestBoardProps) => {
  const filteredQuests = quests.filter(quest => {
    const typeFilter = filter === 'all' || 
                      (filter === 'boss' && quest.type === 'Boss') ||
                      (filter === 'quest' && quest.type === 'Quest');
    
    const regionFilter = !selectedRegion || quest.region === selectedRegion;
    
    return typeFilter && regionFilter;
  });

  const getQuestIcon = (type: string) => type === 'Boss' ? '🐉' : '📜';
  const getQuestColor = (type: string) => type === 'Boss' ? 'bg-fantasy-crimson' : 'bg-fantasy-emerald';

  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-fantasy-gold mb-6 text-glow font-medieval">
        🧭 Quests & Boss Fights
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuests.map((quest, index) => (
          <Card 
            key={index}
            className="p-6 bg-fantasy-dark/60 border-fantasy-gold/50 card-hover border-glow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getQuestIcon(quest.type)}</span>
                <Badge 
                  className={`${getQuestColor(quest.type)} text-white font-semibold`}
                >
                  {quest.type}
                </Badge>
              </div>
              <Badge variant="outline" className="border-fantasy-gold/50 text-fantasy-gold">
                {quest.regionName}
              </Badge>
            </div>
            
            <h3 className="text-lg font-bold text-fantasy-gold mb-3 text-left">
              {quest.title}
            </h3>
            
            <div className="mb-4 text-left">
              <p className="text-fantasy-silver text-sm mb-2">
                🧙‍♂️ <span className="font-semibold">Party:</span> {quest.members.join(', ')}
              </p>
            </div>
            
            <XPBar current={quest.xp} max={quest.maxXp} delay={index * 100} />
          </Card>
        ))}
      </div>
    </div>
  );
};

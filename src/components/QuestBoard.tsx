
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { XPBar } from '@/components/XPBar';
import { FilterType } from '@/pages/Index';

interface QuestBoardProps {
  filter: FilterType;
  selectedRegion: string | null;
}

const quests = [
  // Sarah's Quests
  {
    title: 'Document Gen & Letters Testing',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 12,
    maxXp: 20,
    description: 'Tested doc generation and letters for quotes'
  },
  {
    title: 'Illustrative Premiums Manual Testing',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 15,
    maxXp: 20,
    description: 'Manual testing for illustrative premiums and missing life factors'
  },
  {
    title: 'Accident-Only Test Harness Addition',
    type: 'Quest',
    members: ['Sarah'],
    region: 'salesforce',
    regionName: 'Test Harness',
    xp: 18,
    maxXp: 20,
    description: 'Added accident-only cover to test harness — uncovered a bug!'
  },
  
  // Sershin's Quests
  {
    title: 'Roles & Permissions Bug Hunt',
    type: 'Boss',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 20,
    maxXp: 25,
    description: 'Roles & permissions testing uncovered many bugs'
  },
  {
    title: 'Comprehensive Calculator Build',
    type: 'Boss',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'Test Harness',
    xp: 25,
    maxXp: 25,
    description: 'Built comprehensive calculator + re-test features'
  },
  {
    title: 'Provar Automation Pause',
    type: 'Quest',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'Automation',
    xp: 5,
    maxXp: 10,
    description: 'Paused Provar automation to focus on harness value'
  },
  {
    title: 'Multi-Applicant Framework',
    type: 'Quest',
    members: ['Sershin'],
    region: 'salesforce',
    regionName: 'Test Data',
    xp: 15,
    maxXp: 20,
    description: 'Framework complete; prepping for UAT data generation'
  },
  {
    title: 'Datastor Categoriser Investigation',
    type: 'Quest',
    members: ['Sershin'],
    region: 'knowledge',
    regionName: 'Investigation',
    xp: 10,
    maxXp: 15,
    description: 'Set up user test environment for performance issues'
  },
  
  // Keshlin's Quests
  {
    title: 'Roles & Permissions Bug Massacre',
    type: 'Boss',
    members: ['Keshlin'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 30,
    maxXp: 30,
    description: 'Destroyed bugs MP-2309 to MP-2392'
  },
  {
    title: 'Doc Storage Refactoring Takeover',
    type: 'Quest',
    members: ['Keshlin'],
    region: 'docforge',
    regionName: 'Document Services',
    xp: 12,
    maxXp: 20,
    description: 'Took over doc storage refactoring from Kasu (MP-1938)'
  },
  {
    title: 'POD Eligibility Fix',
    type: 'Quest',
    members: ['Keshlin'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 10,
    maxXp: 15,
    description: 'Fixed eligibility criteria for POD (MP-2289)'
  },
  
  // Kieran's Quests
  {
    title: 'Rate Reconfiguration Analysis',
    type: 'Quest',
    members: ['Kieran'],
    region: 'knowledge',
    regionName: 'Rate Config Analysis',
    xp: 15,
    maxXp: 15,
    description: 'Completed rate reconfiguration analysis'
  },
  {
    title: 'Halo Build Issues Resolution',
    type: 'Quest',
    members: ['Kieran'],
    region: 'halo',
    regionName: 'Halo',
    xp: 8,
    maxXp: 10,
    description: 'Solved Halo local build issues'
  },
  
  // Kasu's Quests
  {
    title: 'Doc Storage Handover',
    type: 'Quest',
    members: ['Kasu'],
    region: 'docforge',
    regionName: 'Document Services',
    xp: 10,
    maxXp: 15,
    description: 'Handed off SFI doc storage refactoring to Keshlin'
  },
  {
    title: 'ITC Credit Report & Letters',
    type: 'Quest',
    members: ['Kasu'],
    region: 'docforge',
    regionName: 'Document Generation',
    xp: 20,
    maxXp: 20,
    description: 'Delivered ITC Credit Report and other letters'
  },
  {
    title: 'Aspose Template Development',
    type: 'Quest',
    members: ['Kasu'],
    region: 'docforge',
    regionName: 'Document Services',
    xp: 15,
    maxXp: 20,
    description: 'Form27, HAL Policy, and other templates completed'
  },
  
  // Qiniso's Quests
  {
    title: 'HaloV3 ITC Issues & Logging',
    type: 'Boss',
    members: ['Qiniso'],
    region: 'halo',
    regionName: 'Halo Support',
    xp: 18,
    maxXp: 20,
    description: 'Resolved HaloV3 ITC issues + logging fixes'
  },
  {
    title: 'Client Servicing Scenarios Update',
    type: 'Quest',
    members: ['Qiniso'],
    region: 'clienthold',
    regionName: 'Client Servicing',
    xp: 15,
    maxXp: 20,
    description: 'Updated onboarding scenarios; created new test cases'
  },
  
  // Dillip's Quest
  {
    title: 'Scheduled Apex Job Creation',
    type: 'Boss',
    members: ['Dillip'],
    region: 'salesforce',
    regionName: 'SFI',
    xp: 20,
    maxXp: 20,
    description: 'Built Scheduled + Batchable Apex job for policy transitions'
  },
  
  // Eveshan's Quests
  {
    title: 'CDPE Development Complete',
    type: 'Quest',
    members: ['Eveshan'],
    region: 'cdpe',
    regionName: 'CDPE Further Lending',
    xp: 15,
    maxXp: 20,
    description: 'Completed CDPE dev changes; testing in progress'
  },
  {
    title: 'Valuation Rule Tickets',
    type: 'Quest',
    members: ['Eveshan'],
    region: 'cdpe',
    regionName: 'MO Valuation',
    xp: 12,
    maxXp: 18,
    description: 'Completed 7/9 valuation rule tickets'
  },
  {
    title: 'Edge Step-Up Instalment Changes',
    type: 'Quest',
    members: ['Eveshan'],
    region: 'cdpe',
    regionName: 'MO Instalments',
    xp: 15,
    maxXp: 20,
    description: 'Changes across onboarding, credit summary, post-credit'
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
        🧭 The Quest Log
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
              <p className="text-fantasy-silver text-xs italic">
                {quest.description}
              </p>
            </div>
            
            <XPBar current={quest.xp} max={quest.maxXp} delay={index * 100} />
          </Card>
        ))}
      </div>
    </div>
  );
};

import type { DutchBetOpportunity } from '../types/DutchBetOpportunity';

export const testData: DutchBetOpportunity[] = [
  // your full test data array...
  {
    eventId: "evt_001",
    market: "Match Winner",
    combinations: [
      {
        id: "odds_001",
        eventId: "evt_001",
        bookmaker: "SportPesa",
        market: {
          rawName: "1X2",
          standardizedName: "Match Winner",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "Gor Mahia vs AFC Leopards",
          standardizedName: "Gor Mahia vs AFC Leopards",
          type: "team",
        },
        odds: 1.90,
        timestamp: Date.now() - 360000, // 6 mins ago
      },
      // ... more combinations
    ],
    margin: 2.45,
    impliedProbability: 97.55,
  },
  {
    eventId: "evt_002",
    market: "Total Goals",
    combinations: [
      {
        id: "odds_004",
        eventId: "evt_002",
        bookmaker: "Melbet",
        market: {
          rawName: "Over/Under Goals",
          standardizedName: "Total Goals",
          marketGroup: "Goals Markets",
        },
        selection: {
          rawName: "Over 2.5",
          standardizedName: "Over 2.5 Goals",
          type: "total",
        },
        odds: 2.05,
        timestamp: Date.now() - 240000, // 4 mins ago
      },
      // ... more combinations
    ],
    margin: 1.89,
    impliedProbability: 98.11,
  },
  {
    eventId: "evt_003",
    market: "Both Teams to Score",
    combinations: [
      {
        id: "odds_006",
        eventId: "evt_003",
        bookmaker: "SportPesa",
        market: {
          rawName: "BTTS",
          standardizedName: "Both Teams to Score",
          marketGroup: "Goals Markets",
        },
        selection: {
          rawName: "Yes",
          standardizedName: "Both Teams to Score - Yes",
          type: "boolean",
        },
        odds: 1.78,
        timestamp: Date.now() - 300000, // 5 mins ago
      },
      // ... more combinations
    ],
    margin: 2.67,
    impliedProbability: 97.33,
  },
  {
    eventId: "evt_004",
    market: "Next Goal",
    combinations: [
      {
        id: "odds_008",
        eventId: "evt_004",
        bookmaker: "Betway",
        market: {
          rawName: "Next Goal",
          standardizedName: "Next Goal",
          marketGroup: "Goals Markets",
        },
        selection: {
          rawName: "Gor Mahia",
          standardizedName: "Gor Mahia vs AFC Leopards",
          type: "team",
        },
        odds: 2.20,
        timestamp: Date.now() - 180000, // 3 mins ago
      },
      // ... more combinations
    ],
    margin: 3.12,
    impliedProbability: 96.88,
  },
  {
    eventId: "evt_005",
    market: "Handicap",
    combinations: [
      {
        id: "odds_010",
        eventId: "evt_005",
        bookmaker: "Betway",
        market: {
          rawName: "Asian Handicap",
          standardizedName: "Handicap",
          marketGroup: "Handicap Markets",
        },
        selection: {
          rawName: "Gor Mahia +1",
          standardizedName: "Gor Mahia +1 Goal",
          type: "handicap",
        },
        odds: 1.85,
        timestamp: Date.now() - 120000, // 2 mins ago
      },
      // ... more combinations
    ],
    margin: 2.33,
    impliedProbability: 97.67,
  },
  {
    eventId: "evt_006",
    market: "First Half Winner",
    combinations: [
      {
        id: "odds_012",
        eventId: "evt_006",
        bookmaker: "Melbet",
        market: {
          rawName: "First Half 1X2",
          standardizedName: "First Half Winner",
          marketGroup: "Half Markets",
        },
        selection: {
          rawName: "Gor Mahia",
          standardizedName: "Gor Mahia First Half Winner",
          type: "team",
        },
        odds: 2.10,
        timestamp: Date.now() - 60000, // 1 min ago
      },
      // ... more combinations
    ],
    margin: 1.75,
    impliedProbability: 98.25,
  },
  {
    eventId: "evt_007",
    market: "Double Chance",
    combinations: [
      {
        id: "odds_014",
        eventId: "evt_007",
        bookmaker: "SportPesa",
        market: {
          rawName: "Double Chance",
          standardizedName: "Double Chance",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "Gor Mahia or Draw",
          standardizedName: "Gor Mahia or Draw",
          type: "doubleChance",
        },
        odds: 1.65,
        timestamp: Date.now() - 300000, // 5 mins ago
      },
      // ... more combinations
    ],
    margin: 2.50,
    impliedProbability: 97.50,
  },
  {
    eventId: "evt_008",
    market: "Correct Score",
    combinations: [
      {
        id: "odds_016",
        eventId: "evt_008",
        bookmaker: "Betway",
        market: {
          rawName: "Correct Score",
          standardizedName: "Correct Score",
          marketGroup: "Score Markets",
        },
        selection: {
          rawName: "1-0 Gor Mahia",
          standardizedName: "1-0 Gor Mahia",
          type: "score",
        },
        odds: 6.50,
        timestamp: Date.now() - 120000, // 2 mins ago
      },
      // ... more combinations
    ],
    margin: 3.45,
    impliedProbability: 96.55,
  },
  {
    eventId: "evt_009",
    market: "First Goal Scorer",
    combinations: [
      {
        id: "odds_018",
        eventId: "evt_009",
        bookmaker: "Melbet",
        market: {
          rawName: "First Goal Scorer",
          standardizedName: "First Goal Scorer",
          marketGroup: "Player Markets",
        },
        selection: {
          rawName: "John Doe",
          standardizedName: "John Doe First Goal Scorer",
          type: "player",
        },
        odds: 4.00,
        timestamp: Date.now() - 180000, // 3 mins ago
      },
      // ... more combinations
    ],
    margin: 2.90,
    impliedProbability: 97.10,
  },
  {
    eventId: "evt_010",
    market: "Last Goal Scorer",
    combinations: [
      {
        id: "odds_020",
        eventId: "evt_010",
        bookmaker: "SportPesa",
        market: {
          rawName: "Last Goal Scorer",
          standardizedName: "Last Goal Scorer",
          marketGroup: "Player Markets",
        },
        selection: {
          rawName: "Jane Smith",
          standardizedName: "Jane Smith Last Goal Scorer",
          type: "player",
        },
        odds: 5.50,
        timestamp: Date.now() - 240000, // 4 mins ago
      },
      // ... more combinations
    ],
    margin: 3.20,
    impliedProbability: 96.80,
  },
  {
    eventId: "evt_011",
    market: "Clean Sheet",
    combinations: [
      {
        id: "odds_022",
        eventId: "evt_011",
        bookmaker: "Betway",
        market: {
          rawName: "Clean Sheet",
          standardizedName: "Clean Sheet",
          marketGroup: "Team Markets",
        },
        selection: {
          rawName: "Gor Mahia Clean Sheet",
          standardizedName: "Gor Mahia Clean Sheet",
          type: "boolean",
        },
        odds: 2.75,
        timestamp: Date.now() - 300000, // 5 mins ago
      },
      // ... more combinations
    ],
    margin: 2.80,
    impliedProbability: 97.20,
  },
  {
    eventId: "evt_012",
    market: "Half Time/Full Time",
    combinations: [
      {
        id: "odds_024",
        eventId: "evt_012",
        bookmaker: "Melbet",
        market: {
          rawName: "Half Time/Full Time",
          standardizedName: "Half Time/Full Time",
          marketGroup: "Half Markets",
        },
        selection: {
          rawName: "Gor Mahia/Gor Mahia",
          standardizedName: "Gor Mahia Half Time/Full Time",
          type: "halfTimeFullTime",
        },
        odds: 3.50,
        timestamp: Date.now() - 120000, // 2 mins ago
      },
      // ... more combinations
    ],
    margin: 3.00,
    impliedProbability: 97.00,
  },
    
        
];


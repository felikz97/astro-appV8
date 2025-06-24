export interface OddsNode {
  id: string;
  eventId: string;
  bookmaker: string;
  market: {
    rawName: string;
    standardizedName: string;
    marketGroup: string;
  };
  selection: {
    rawName: string;
    standardizedName: string;
    type: string;
  };
  odds: number;
  timestamp: number;
}

export interface DutchBetOpportunity {
  eventId: string;
  market: string;
  combinations: OddsNode[];
  margin: number;
  impliedProbability: number;
}

const sampleOpportunities: DutchBetOpportunity[] = [
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
          rawName: "Gor Mahia",
          standardizedName: "Gor Mahia",
          type: "team",
        },
        odds: 1.90,
        timestamp: Date.now() - 360000, // 6 mins ago
      },
      {
        id: "odds_002",
        eventId: "evt_001",
        bookmaker: "Betika",
        market: {
          rawName: "Match Result",
          standardizedName: "Match Winner",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "Draw",
          standardizedName: "Draw",
          type: "outcome",
        },
        odds: 3.25,
        timestamp: Date.now() - 180000, // 3 mins ago
      },
      {
        id: "odds_003",
        eventId: "evt_001",
        bookmaker: "22Bet",
        market: {
          rawName: "Full Time Result",
          standardizedName: "Match Winner",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "AFC Leopards",
          standardizedName: "AFC Leopards",
          type: "team",
        },
        odds: 4.10,
        timestamp: Date.now() - 60000, // 1 min ago
      },
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
      {
        id: "odds_005",
        eventId: "evt_002",
        bookmaker: "1xBet",
        market: {
          rawName: "Total Goals O/U",
          standardizedName: "Total Goals",
          marketGroup: "Goals Markets",
        },
        selection: {
          rawName: "Under 2.5",
          standardizedName: "Under 2.5 Goals",
          type: "total",
        },
        odds: 1.85,
        timestamp: Date.now() - 120000, // 2 mins ago
      },
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
      {
        id: "odds_007",
        eventId: "evt_003",
        bookmaker: "Betika",
        market: {
          rawName: "Both Teams to Score",
          standardizedName: "Both Teams to Score",
          marketGroup: "Goals Markets",
        },
        selection: {
          rawName: "No",
          standardizedName: "Both Teams to Score - No",
          type: "boolean",
        },
        odds: 2.15,
        timestamp: Date.now() - 150000, // 2.5 mins ago
      },
    ],
    margin: 2.67,
    impliedProbability: 97.33,
  },
  {
    eventId: "evt_004",
    market: "First Half Result",
    combinations: [
      {
        id: "odds_008",
        eventId: "evt_004",
        bookmaker: "22Bet",
        market: {
          rawName: "1st Half 1X2",
          standardizedName: "First Half Result",
          marketGroup: "Half Markets",
        },
        selection: {
          rawName: "Kenya Harlequins",
          standardizedName: "Kenya Harlequins",
          type: "team",
        },
        odds: 2.20,
        timestamp: Date.now() - 420000, // 7 mins ago
      },
      {
        id: "odds_009",
        eventId: "evt_004",
        bookmaker: "Melbet",
        market: {
          rawName: "Half Time Result",
          standardizedName: "First Half Result",
          marketGroup: "Half Markets",
        },
        selection: {
          rawName: "Draw",
          standardizedName: "Draw",
          type: "outcome",
        },
        odds: 2.80,
        timestamp: Date.now() - 180000, // 3 mins ago
      },
      {
        id: "odds_010",
        eventId: "evt_004",
        bookmaker: "1xBet",
        market: {
          rawName: "1st Half Result",
          standardizedName: "First Half Result",
          marketGroup: "Half Markets",
        },
        selection: {
          rawName: "KCB Rugby",
          standardizedName: "KCB Rugby",
          type: "team",
        },
        odds: 3.50,
        timestamp: Date.now() - 90000, // 1.5 mins ago
      },
    ],
    margin: 3.12,
    impliedProbability: 96.88,
  },
  {
    eventId: "evt_005",
    market: "Point Spread",
    combinations: [
      {
        id: "odds_011",
        eventId: "evt_005",
        bookmaker: "SportPesa",
        market: {
          rawName: "Handicap",
          standardizedName: "Point Spread",
          marketGroup: "Basketball Markets",
        },
        selection: {
          rawName: "Nairobi Thunder +5.5",
          standardizedName: "Nairobi Thunder +5.5",
          type: "handicap",
        },
        odds: 1.92,
        timestamp: Date.now() - 360000, // 6 mins ago
      },
      {
        id: "odds_012",
        eventId: "evt_005",
        bookmaker: "Betika",
        market: {
          rawName: "Point Handicap",
          standardizedName: "Point Spread",
          marketGroup: "Basketball Markets",
        },
        selection: {
          rawName: "Ulinzi Warriors -5.5",
          standardizedName: "Ulinzi Warriors -5.5",
          type: "handicap",
        },
        odds: 1.98,
        timestamp: Date.now() - 120000, // 2 mins ago
      },
    ],
    margin: 1.45,
    impliedProbability: 98.55,
  },
  {
    eventId: "evt_006",
    market: "Correct Score",
    combinations: [
      {
        id: "odds_013",
        eventId: "evt_006",
        bookmaker: "1xBet",
        market: {
          rawName: "Exact Score",
          standardizedName: "Correct Score",
          marketGroup: "Score Markets",
        },
        selection: {
          rawName: "2-1",
          standardizedName: "2-1",
          type: "score",
        },
        odds: 8.50,
        timestamp: Date.now() - 480000, // 8 mins ago
      },
      {
        id: "odds_014",
        eventId: "evt_006",
        bookmaker: "Melbet",
        market: {
          rawName: "Correct Score",
          standardizedName: "Correct Score",
          marketGroup: "Score Markets",
        },
        selection: {
          rawName: "1-1",
          standardizedName: "1-1",
          type: "score",
        },
        odds: 6.00,
        timestamp: Date.now() - 240000, // 4 mins ago
      },
      {
        id: "odds_015",
        eventId: "evt_006",
        bookmaker: "22Bet",
        market: {
          rawName: "Final Score",
          standardizedName: "Correct Score",
          marketGroup: "Score Markets",
        },
        selection: {
          rawName: "0-1",
          standardizedName: "0-1",
          type: "score",
        },
        odds: 9.00,
        timestamp: Date.now() - 60000, // 1 min ago
      },
    ],
    margin: 4.01,
    impliedProbability: 95.99,
  },
  
];
export { sampleOpportunities as testData };
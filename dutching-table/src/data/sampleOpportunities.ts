import type { DutchBetOpportunity } from '../types/DutchBetOpportunity';

export const sampleOpportunities: DutchBetOpportunity[] = [
  {
    eventId: "evt_001",
    market: "Match Winner",
    combinations: [
      {
        id: "odds_001",
        eventId: "evt_001",
        bookmaker: "Betika",
        market: {
          rawName: "1X2",
          standardizedName: "Match Winner",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "ARS",
          standardizedName: "Arsenal",
          type: "team",
        },
        odds: 2.2,
        timestamp: Date.now(),
      },
      {
        id: "odds_002",
        eventId: "evt_001",
        bookmaker: "BetWinner",
        market: {
          rawName: "1X2",
          standardizedName: "Match Winner",
          marketGroup: "Main Markets",
        },
        selection: {
          rawName: "MAN U",
          standardizedName: "Man U",
          type: "team",
        },
        odds: 2.6,
        timestamp: Date.now(),
      },
    ],
    margin: 1.9,
    impliedProbability: 98.1,
  },
];

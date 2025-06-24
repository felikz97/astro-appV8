// src/types/DutchBetOpportunity.ts

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

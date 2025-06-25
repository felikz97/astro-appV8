// src/utils/getMatchLabel.ts
import type { OddsNode } from '../types/DutchBetOpportunity';

export const getMatchLabel = (combinations: OddsNode[]): string => {
  const teams = combinations
    .filter((c) => c.selection.type === 'team')
    .map((c) => c.selection.standardizedName);
  return teams.join(' vs ') || combinations[0]?.selection.standardizedName || 'Unknown';
};

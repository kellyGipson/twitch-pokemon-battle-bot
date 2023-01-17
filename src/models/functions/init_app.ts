import { NaturesData, NaturesDataInterface, PokemonNatures } from '../enums/pokemon-natures';
import { TypeChart, TypeChartInterface, Types } from '../enums/pokemon-types';

export const INIT_TYPE_CHART_MAP = (): Map<string, TypeChartInterface> => {
  const chart = new Map<string, TypeChartInterface>();
  Types.forEach((s) => {
    chart.set(s, TypeChart[s])
  });

  return chart;
};

export const INIT_NATURE_MAP = (): Map<string, NaturesDataInterface> => {
  const chart = new Map<string, NaturesDataInterface>();
  PokemonNatures.forEach((s) => {
    chart.set(s, NaturesData[s])
  });

  return chart;
};

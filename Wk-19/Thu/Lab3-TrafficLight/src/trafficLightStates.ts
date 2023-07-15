export const trafficLightStates = {
  stopLight: "stop",
  slowLight: "slow",
  goLight: "go",
} as const;
export type T_trafficLightStatesKeys = keyof typeof trafficLightStates;
export type T_trafficLightStatesVals = typeof trafficLightStates[T_trafficLightStatesKeys];

import { trafficLightStates, T_trafficLightStatesVals } from "./trafficLightStates";
interface T_TrafficLightsProps{
  whichLight: T_trafficLightStatesVals
}
export default function TrafficLights(props: T_TrafficLightsProps){
  // TODO: pass in a prop to read the state of which light should be on
  // Use this to add the `on` class to the corresponding `bulb` (the given CSS will change the `background-color`)
  const {whichLight} = props;

  function applyLight(light: T_trafficLightStatesVals){
    if(whichLight === light){
      return "on"
    }
    return "";
  }

  return (
    <div id="traffic-lights">
      <div id="stop-light" className={`bulb ${applyLight(trafficLightStates.stopLight)}`}></div>
      <div id="slow-light" className={`bulb ${applyLight(trafficLightStates.slowLight)}`}></div>
      <div id="go-light" className={`bulb ${applyLight(trafficLightStates.goLight)}`}></div>
    </div>
  );
}

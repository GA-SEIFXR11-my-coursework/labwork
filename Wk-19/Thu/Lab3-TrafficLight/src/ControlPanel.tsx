import React from 'react';
import { trafficLightStates, T_trafficLightStatesVals } from "./trafficLightStates";
interface T_ControlPanelProps{
  setWhichLight: React.Dispatch<React.SetStateAction<T_trafficLightStatesVals>>
}
export default function ControlPanel(props: T_ControlPanelProps){
  // TODO: pass in a prop change the state of which light should be on
  const {setWhichLight} = props;
  return (
    <div id="control-panel">
      <button id="stop-button" onClick={()=>{setWhichLight(trafficLightStates.stopLight)}}>stop</button>
      <button id="slow-button" onClick={()=>{setWhichLight(trafficLightStates.slowLight)}}>slow</button>
      <button id="go-button" onClick={()=>{setWhichLight(trafficLightStates.goLight)}}>go</button>
    </div>
  );
}

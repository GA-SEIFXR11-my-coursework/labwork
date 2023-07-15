import { useState } from 'react';
import ControlPanel from './ControlPanel';
import TrafficLights from './TrafficLights';
import { trafficLightStates, T_trafficLightStatesVals } from "./trafficLightStates";
import './App.css';

const defaultTrafficLightState = trafficLightStates.goLight;

export default function App(){
  const [whichLight, setWhichLight] = useState(defaultTrafficLightState as T_trafficLightStatesVals);
  return (
    <>
      <div className="app">
        <ControlPanel setWhichLight={setWhichLight}/>
        <TrafficLights whichLight={whichLight}/>
      </div>
    </>
  )
}


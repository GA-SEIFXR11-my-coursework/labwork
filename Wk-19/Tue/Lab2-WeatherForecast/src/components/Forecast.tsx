import { weatherConditions } from "../weatherConditions";
type weatherConditionsKeys = keyof typeof weatherConditions;

export interface ForecastProp{
  day: string,
  conditions: typeof weatherConditions[weatherConditionsKeys],
  maxTemp: number,  // C
  wind: number      // km/h
}
// thresholds are values inclusive
const heatwaveThreshold = 35;    // C
const strongwindThreshold = 30;  // km/h

function warning(temp: number, wind: number){
  const heatwave = (temp >= heatwaveThreshold);
  const strongwind = (wind >= strongwindThreshold);
  if( ! (heatwave || strongwind) ){
    return <></>
  }
  return(
    <>
    <p>Warning:</p>
    <ul>
      {heatwave && <li>Heatwave</li>}
      {strongwind && <li>Strong winds</li>}
    </ul>
    </>
  )
}

export default function Forecast(props: ForecastProp){
  const {day, conditions, maxTemp, wind} = props;
  return(
    <div className="card" id={`card-${day}`}>
      <h2>{day}</h2>
      <p>{conditions.key} {conditions.emoji}</p>
      <p>Max: {maxTemp}</p>
      <p>Wind: {wind}</p>
      {warning(maxTemp, wind)}
    </div>
  )
}

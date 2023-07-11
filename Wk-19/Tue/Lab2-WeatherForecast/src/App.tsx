import { weatherConditions } from "./weatherConditions";
import Forecast, {ForecastProp} from "./components/Forecast";

const forecasts: ForecastProp[] = [
  {
    day: "Monday",
    conditions: weatherConditions.sunny,
    maxTemp: 38,
    wind: 15,
  },
  {
    day: "Tuesday",
    conditions: weatherConditions.stormy,
    maxTemp: 26,
    wind: 36,
  },
  {
    day: "Wednesday",
    conditions: weatherConditions.rainy,
    maxTemp: 25,
    wind: 25,
  },
  {
    day: "Thursday",
    conditions: weatherConditions.cloudy,
    maxTemp: 28,
    wind: 20,
  },
  {
    day: "Friday",
    conditions: weatherConditions.sunny,
    maxTemp: 35,
    wind: 16,
  },
];

export default function App(){
  const forecastList = forecasts.map(forecast => {
    return <Forecast {...forecast}/>
  })
  return(
    <>{forecastList}</>
  )
}

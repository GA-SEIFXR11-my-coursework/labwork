import "./Forecast.css";

const Forecast = ({ day, conditions, maxTemp, wind }) => {
  let emoji;
  switch (conditions) {
    case "sunny":
      emoji = "☀️";
      break;
    case "stormy":
      emoji = "⛈️";
      break;
    case "rainy":
      emoji = "🌧️";
      break;
    case "cloudy":
      emoji = "⛅️";
      break;
    default:
      emoji = "";
  }

  let warnings = [];
  if (maxTemp >= 35) {
    warnings.push(
      <strong key="heatwave" className="warning">
        Heatwave
      </strong>
    );
  }
  if (wind >= 30) {
    warnings.push(
      <strong key="strong-winds" className="warning">
        Strong Winds
      </strong>
    );
  }

  return (
    <div className="forecast">
      <div className="emoji">{emoji}</div>
      <div className="details">
        <p className="temperature">{maxTemp}°C</p>
        <p className="conditions">{conditions}</p>
        <p className="wind">{wind} kmh</p>
      </div>
      <h3 className="day">{day}</h3>
      {!!warnings.length && <div className="warnings">{warnings}</div>}
    </div>
  );
};

export default Forecast;

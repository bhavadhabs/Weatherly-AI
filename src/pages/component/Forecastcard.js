import React from 'react';

function ForecastCard({ time, day, temp, tempMax, tempMin, icon, description, windSpeed }) {
  return (
    <div className="forecast-card">
      <p>{time || day}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        width="50"
      />
      <p>{temp !== undefined ? `${temp}°C` : `${tempMax}°C / ${tempMin}°C`}</p>
      <p>{description}</p>
      {windSpeed && <p>Wind: {windSpeed} km/h</p>}
    </div>
  );
}

export default ForecastCard;

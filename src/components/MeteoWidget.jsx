import { useEffect, useState } from 'react';

function MeteoWidget() {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState(null);

  const getTodayDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('fr-FR', options);
  };

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=43.9811&longitude=2.3894&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data?.current_weather) {
          setTemperature(data.current_weather.temperature);
          setCondition(data.current_weather.weathercode);
        }
      })
      .catch(err => console.error('Erreur météo :', err));
  }, []);

  const getWeatherLabel = (code) => {
    const map = {
      0: 'Soleil',
      1: 'Principalement clair',
      2: 'Partiellement nuageux',
      3: 'Couvert',
      45: 'Brouillard',
      61: 'Pluie légère',
      71: 'Neige légère',
      95: 'Orage',
    };
    return map[code] || 'Conditions variables';
  };

  return (
    <div className="meteo-widget">
      <p className="meteo-date">{getTodayDate()}</p>
      {temperature !== null ? (
        <p className="meteo-info">
          {temperature}°C à Valence-d'Albigeois — {getWeatherLabel(condition)}
        </p>
      ) : (
        <p className="meteo-info">Chargement de la météo…</p>
      )}
    </div>
  );
}

export default MeteoWidget;

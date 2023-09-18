import WeatherData from "./WeatherData";

export default interface IWeatherDataClient {
    notify(data : WeatherData): void;
}
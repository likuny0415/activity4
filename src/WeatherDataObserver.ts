import IWeatherDataClient from "./WeatherDataClient"

export default interface IWeatherDataObserver {
    update():void

    addListener(listener:IWeatherDataClient): void
}

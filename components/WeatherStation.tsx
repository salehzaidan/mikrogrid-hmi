import Image from 'next/image'

import Logo from '../assets/weather-station.jpg'
import Detail from './Detail'

function WeatherStation() {
  return (
    <div className="col-span-2 grid w-[1fr] grid-flow-col grid-rows-[auto_auto] items-center justify-items-start">
      <div className="row-span-2 h-40 w-40 justify-self-center">
        <Image src={Logo} alt="Weather Station Logo" />
      </div>
      <h2 className="mb-2 self-end text-xl font-medium">Weather Station</h2>
      <Detail
        variables={{
          'Irradiance': '1.57 W/m<sup>2</sup>', // prettier-ignore
          'Temperature': '20.4 &deg;C', // prettier-ignore
          'Wind Speed': '6.54 km/h',
        }}
        className="self-start"
      />
    </div>
  )
}

export default WeatherStation

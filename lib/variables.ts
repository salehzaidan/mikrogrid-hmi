export type BatteryData = {
  current: number
  current_output: number
  est_soc: number
  frequency: number
  max_temp: number
  meas_soc: number
  total_voltage: number
  volt_output: number
}

export type GridData = {
  current: number
  frequency: number
  pactive: number
  preactive: number
  voltage: number
}

export type LoadData = {
  current: number
  electricity_load: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  frequency: number
  pf: number
  voltage: number
}

export type PVData = {
  frequency: number
  iac: number
  idc: number
  pac: number
  pv_production: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  vac: number
  vdc: number
}

export type WeatherStationData = {
  irradiance: number
  temperature: number
  wind_speed: number
}

export type Data = {
  battery: BatteryData
  grid: GridData
  load: LoadData
  pv: PVData
  weather_station: WeatherStationData
}

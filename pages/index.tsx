import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useFetch } from 'usehooks-ts'

import Card from '../components/Card'
import Cell from '../components/Cell'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WeatherStation from '../components/WeatherStation'
import type { Data } from '../lib/variables'

const Home: NextPage = () => {
  const { data, error } = useFetch<Data>(process.env.NEXT_PUBLIC_API_URL)

  useEffect(() => {
    console.log('data:', data)
    console.log('error:', error)
  }, [data, error])

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>
          Microgrid Digital Twin - Lab. Energy Management, Engineering Physics,
          ITB
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="grow overflow-x-auto py-10 px-6">
        <section className="container mx-auto">
          <div className="mx-auto grid w-fit grid-cols-[repeat(6,_1fr)]">
            <WeatherStation />
            <Cell />
            <Cell lines={['bottom']}>
              <Card type="pv" />
            </Cell>
            <Cell>
              <Detail
                variables={{
                  'V<sub>dc</sub>': '354.9 V',
                  'I<sub>dc</sub>': '10.35 A',
                  'V<sub>ac</sub>': '234.9 V',
                  'I<sub>ac</sub>': '9.17 A',
                  'Frequency': '49.98 Hz', // prettier-ignore
                  'P<sub>ac</sub>': '0.25 kW',
                }}
              />
            </Cell>
            <Cell />

            <Cell lines={['right']}>
              <Card type="grid" />
            </Cell>
            <Cell lines={['left', 'right']} />
            <Cell lines={['left', 'right']}>
              <Card type="battery" />
            </Cell>
            <Cell lines={['top', 'left', 'right']} />
            <Cell lines={['left', 'right']} />
            <Cell lines={['left']}>
              <Card type="load" />
            </Cell>

            <Cell>
              <Detail
                variables={{
                  'Voltage': '234.9 V', // prettier-ignore
                  'Current': '17.15 A', // prettier-ignore
                  'Frequency': '49.98 Hz', // prettier-ignore
                  'P. Active': '0.5 kW',
                  'P. Reactive': '0.25 kVar',
                }}
                className="self-start"
              />
            </Cell>
            <Cell />
            <Cell className="-translate-x-1/2">
              <Detail
                variables={{
                  'Tot. Voltage': '52.20 V',
                  'Est. SoC': '70.20 %',
                  'Meas. SoC': '69.80 %',
                  'Current': '-0.50 A', // prettier-ignore
                  'Max Temp.': '25.1 &deg;C',
                }}
                header="DC Side"
                className="self-start"
              />
            </Cell>
            <Cell className="-translate-x-1/2">
              <Detail
                variables={{
                  'Volt. Output': '234.9 V',
                  'Curr. Output': '17.15 A',
                  'Frequency': '49.98 Hz', // prettier-ignore
                }}
                header="AC Side"
                className="self-start"
              />
            </Cell>
            <Cell />
            <Cell>
              <Detail
                variables={{
                  'Voltage': '234.9 V', // prettier-ignore
                  'Current': '17.15 A', // prettier-ignore
                  'PF': '0.96', // prettier-ignore
                  'Frequency': '49.98 Hz', // prettier-ignore
                }}
                className="self-start"
              />
            </Cell>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

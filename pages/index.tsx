import type { NextPage } from 'next'
import Head from 'next/head'

import Card from '../components/Card'
import Cell from '../components/Cell'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Sistem Mikrogrid - Lab Manajemen Energi Teknik Fisika ITB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="grow overflow-x-auto py-10 px-6">
        <section className="container mx-auto">
          <h2 className="mb-2 text-xl font-medium">Weather</h2>
          <div>
            <div className="font-medium">
              Irradiance{' '}
              <span className="font-normal">
                1.57 W/m<sup>2</sup>
              </span>
            </div>
            <div className="font-medium">
              Temperature <span className="font-normal">20.4 &deg;C</span>
            </div>
            <div className="font-medium">
              Wind Speed <span className="font-normal">6.54 km/h</span>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="mx-auto grid w-fit grid-cols-[repeat(6,_1fr)]">
            <Cell />
            <Cell />
            <Cell />
            <Cell lines={['bottom']}>
              <Card type="pv" />
            </Cell>
            <Cell />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

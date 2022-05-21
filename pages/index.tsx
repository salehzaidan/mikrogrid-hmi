import type { NextPage } from 'next'
import Head from 'next/head'

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
      <main className="grow"></main>
      <Footer />
    </div>
  )
}

export default Home

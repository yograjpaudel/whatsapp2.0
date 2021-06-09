import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Whatsapp-2.0" />
        <link rel="icon" href="/whatsapp.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}

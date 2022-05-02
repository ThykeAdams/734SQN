import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>734 RCACS</title>
      </Head>
      <main className="h-[40vh]">
        <div className="flex h-full">
          <div className="flex h-full w-1/2 flex-col items-center justify-center sm:w-screen">
            <h1 className="text-6xl">
              <span className="font-extrabold text-blue-500">734</span>
              <span className="px-3 text-4xl font-semibold">
                Royal Canadian Air Cadet Squadron
              </span>
            </h1>
            <p className="mt-10 text-5xl font-extrabold">
              To learn – to serve – to advance
            </p>
          </div>
          <div className="w-1/2 p-20 sm:w-screen">
            <img src="/ourSquadron.jpg" className="rounded-lg" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

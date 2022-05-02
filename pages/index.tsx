import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <div className="fixed bottom-5 flex w-screen items-center justify-center sm:hidden">
        <FaChevronDown className="animate-bounce text-3xl" />
      </div>
      <Head>
        <title>734 RCACS</title>
      </Head>
      <main className="">
        <div className="flex h-full w-full sm:flex-col-reverse md:flex-row">
          <div className="flex h-[40vh] w-1/2 flex-col items-center justify-center sm:w-screen sm:p-10 sm:text-center">
            <div>
              <h1 className="text-6xl">
                <span className="font-extrabold text-blue-500">734</span>
                <span className="px-3 text-4xl font-semibold">
                  Royal Canadian Air Cadet Squadron
                </span>
              </h1>
              <p className="mt-10 text-5xl font-extrabold">
                To learn – to serve – to advance
              </p>
              <div className="mt-20">
                <div className="animate-pulse rounded-full bg-blue-900 bg-opacity-70 p-5 text-center text-2xl font-extrabold transition-all duration-500 hover:animate-none hover:bg-opacity-100">
                  Interested?
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/ourSquadron.jpg" className="rounded-lg" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

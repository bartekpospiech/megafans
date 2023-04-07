import Head from 'next/head'
import { ToastProvider } from 'react-toast-notifications'
import { RecoilRoot } from 'recoil'

import {
  LandingDiscordSection,
  LandingHeader,
  LandingHeroSection,
  LandingFooter,
  LandingNftMintSection,
  LandingNftsSection,
  LandingRoadmapSection,
  LandingTeamSection,
  LandingTournamentSection,
  LandingStatsSection,
  LandingBuySection,
} from '@/components'

import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Megafans.io - Esports for All!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecoilRoot>
        <ToastProvider>
          <main className="relative decoration-solid decoration-auto decoration-neon no-underline font-['Space Grotesk'] overflow-x-hidden">
            <LandingHeader />
            <LandingHeroSection />
            <LandingBuySection />
            <LandingNftMintSection />
            <LandingTeamSection />
            <LandingRoadmapSection />
            <LandingNftsSection />
            <LandingTournamentSection />
            <LandingStatsSection />
            <LandingDiscordSection />
            <LandingFooter />
          </main>
        </ToastProvider>
      </RecoilRoot>
    </>
  )
}

export default Page

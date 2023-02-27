import { ReactElement } from 'react'
import Head from 'next/head'

import { Layout, Profile } from '@/components'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page

import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

export default function RootLayout({meta, children}) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="application-name" content="Week of Winter"/>
        <meta name="description" content={meta.description} key="desc"/>
        <meta name="keywords" content={meta.keywords} key="keyword"/>
        <meta name="og:description" content={meta.description} key="og:desc"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        {meta.structuredData ? 
          <script
            key="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.structuredData) }}
          />
        : null}
      </Head>
      {children}
      <Footer/>
    </>
  )
}

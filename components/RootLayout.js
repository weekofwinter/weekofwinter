import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

export default function RootLayout({meta, children}) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="application-name" content="Week of Winter" key="site_name"/>
        <meta name="description" content={meta.description} key="desc"/>
        <meta name="keywords" content={meta.keywords} key="keyword"/>
        <meta property="og:site_name" content="Week of Winter" key="og:site_name"/>
        <meta property="og:title" content={meta.title} key="og:title"/>
        <meta property="og:description" content={meta.description} key="og:desc"/>
        <meta property="og:type" content="website" key="og:type"/>
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

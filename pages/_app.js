import { MDXProvider } from '@mdx-js/react'
import { Heading, Text, ResponsiveImage, NextLink, ListItem } from '../components/mdxComponents';
import '../styles/global.css'
import Youtube from '../components/Youtube';
import Layout from '../components/Layout';
import { Globals, useReducedMotion } from '@react-spring/web';
import { useEffect } from 'react';
import { useScrollRestoration } from '../components/hooks';
import { Analytics } from '@vercel/analytics/react';
import { Kanit, Lato, Barlow_Condensed } from "next/font/google"

//override mdx components
const components = {
  h1: Heading.H2, //should only be one h1 per page so is overrided to prevent errors
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  p: Text,
  img: ResponsiveImage,
  a: NextLink, 
  li: ListItem,
  Youtube,
  Layout,
}

const text = Lato({
  weight: ["400", "700"],
  style:["normal", "italic"],
  subsets:["latin"],
  display:"swap",
  variable:"--font-text"
})

const heading = Barlow_Condensed({
  weight: ["700", "900"],
  style:["normal", "italic"],
  subsets:["latin"],
  display:"swap",
  variable:"--font-heading"
})

//The root of the website
export default function MyApp({ Component, pageProps, router }) {
  //If the user has turned on reduce motion on their computer, 
  //the animations will skip to the end. No animation will be shown 
  const reduceMotion = useReducedMotion()

  useEffect(()=> {
    Globals.assign({
      skipAnimation:reduceMotion
    })

    return () => {
      Globals.assign({
        skipAnimation:reduceMotion
      })
    }
  }, [reduceMotion])

  useScrollRestoration(router) //Makes it so that you don't land on the top of the page when you hit the back button in the browser

  return (
    <>
      <style jsx global>{`
        :root {
          --font-text: ${text.style.fontFamily};
          --font-heading: ${heading.style.fontFamily};
        }
      `}</style>
      <MDXProvider components={components}>
        <div className={heading.variable}>
        <Component {...pageProps}/>
        </div>
      </MDXProvider>
      <Analytics/>
    </>
  )
}   

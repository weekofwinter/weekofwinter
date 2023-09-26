import React, { useState } from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import s from "./Layout.module.css"
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web'
import RootLayout from './RootLayout'



/**
 * A component to define the layout of the html
 * @component
 * @example
 *<Layout>
 * {children}
 *</Layout>
 */
export default function Layout({
  meta,
  children
}) {

  const imgStyle = useSpring({
    from: {
      opacity:0,
      boxShadow:`0px 0px 0px 0px ${meta.color}`,
    },
    to: {
      opacity:1,
      boxShadow:`0px 100px 100px 100px ${meta.color}`,
    },
  })

  //<Emoji className={s.emoji} symbol={meta.emoji} label={meta.title}/>

  return (
    <RootLayout meta={meta}>
      <Navbar/>
      <main className={s.main}>
        {meta.image ? 
        <>
        <animated.div style={imgStyle} className={s.imgContainer}>
          <Image
            alt={meta.title}
            className={s.img}
            placeholder='blur'
            src={meta.image}
            priority
            fill
          />
        </animated.div>
        <div className={s.titleContainer}>
          <h1 className={s.title}>
            {meta.title}
          </h1>
        </div>
        </>
        : null}
        <article className={s.mainContent}>
          {children}
        </article>
      </main>
    </RootLayout>
  )
}

Layout.propTypes = {
  /**
   * Meta object to define to page
   */
  meta: PropTypes.shape({
    /**
     * A link to a hosted image
     */
    image: PropTypes.string,
    /** 
     * A emoji 
    */
    emoji: PropTypes.string,
    /**
     * A correct color format
     */
    color: PropTypes.string,
    /**
     * The title of the page
     */
    title: PropTypes.string.isRequired,
    /**
     * The description of the page
     */
    description: PropTypes.string.isRequired,
    /**
     * Keywords for the page
     */
    keywords: PropTypes.string
  }),
  /**
   * The react children of the layout
   */
  children: PropTypes.element
}
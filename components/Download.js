import Link from 'next/link'
import React from 'react'
import Icon from "../icons/download.svg"
import s from "./Download.module.css"
import AnimatedContainer from "./AnimatedContainer"

export default function Download({filename}) {
  return (
    <AnimatedContainer className={s.container}>
      <span>{filename}</span>
      <a 
        className={s.link}
        href={`/filer/${filename}`}
        alt={`Download ${filename}`}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Ladda ner
        <Icon className={s.icon} height={30} width={30}/>
      </a>
    </AnimatedContainer>
  )
}

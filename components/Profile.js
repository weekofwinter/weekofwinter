import React from 'react'
import s from "./Profile.module.css"
import DivideContainer from "./DivideContainer"
import Image from 'next/image'

//citat - <q className={s.quote}><em>{quote}</em></q>

export default function Profile({
  name,
  title,
  imageSrc, 
  reverse=false,
  children
}) {
  return (
    <section className={s.section}>
      <DivideContainer reverse={reverse} image>
        <div className={s.content}>
          <header className={s.header}>
            <h3 className={s.name}>{name}</h3>
            <span className={s.title}>{title}</span>
          </header>
          {children}
          
        </div>
        <Image
          src={imageSrc}
          alt={`Bild på ${name} som är ${title} `}
          className={s.image}
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw,
                  50vw"
          fill
        />
      </DivideContainer>
    </section>
  )
}

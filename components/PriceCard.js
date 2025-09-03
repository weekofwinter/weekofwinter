import React from 'react'
import s from "./PriceCard.module.css"
import CheckMark from "../icons/checkmark.svg"
import PropTypes from 'prop-types';
import AnimatedContainer from './AnimatedContainer'
import BookButton from './BookButton';

/**
 * A card to showcase one of many options
 * @component
 * @example
 * <PriceCard
 *   title="Buss"
 *   price="7 395 kr"
 *   popular
 *   includes={[
 *     "Bussresa tur och retur från Uppsala", 
 *     "Boende i skidorten", 
 *     "6 dagars liftkort",
 *     "24/7 service- och jourtelefon", 
 *     "Resegaranti", 
 *     "Guideservice",
 *   ]}
 * />
 */

export default function PriceCard(
  {
    title, 
    price, 
    href,
    buttonTitle,
    buttonSubtitle,
    includes=[], 
    popular=false,
  }) {


  return (
    <AnimatedContainer 
      transform={popular ? "scale(1.1)" : ""} 
      className={s.container}
    >
      <div>
      {popular ? <span className={s.popular}></span> : null}
        <div className={s.titleContainer}>
          <span className={s.title}>{title}</span>
          <span className={s.price}>{price}</span>
        </div>
        <div className={s.includesContainer}>
          <ul className={s.ul}>
          {includes.map((item, index)=> 
            <li key={index} className={s.li}>
              <div className={s.checkMark}>
                  <CheckMark width={30} height={30}/>
              </div>
              {item}
            </li>
          )}
          </ul>
        </div>
      </div>
      <BookButton href={href} title={buttonTitle} subtitle={buttonSubtitle} popular={popular}/>
    </AnimatedContainer>
  )
}

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  buttonSubtitle: PropTypes.string,
  includes: PropTypes.array, 
  popular: PropTypes.bool,
  once: PropTypes.bool,
}
